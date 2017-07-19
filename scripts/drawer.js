goog.provide('Blockly.Drawer');

goog.require('Blockly.Flyout');

 /* New edits 1/24/2017 - Janice
 * Instead of creating the language tree, this will now create
 * the category block dictionary - see createBlockInfoArray below.
 */
Blockly.Drawer.init = function() {
  Blockly.Drawer.flyout_.init(Blockly.mainWorkspace, true);
  for (var name in Blockly.DrawerInit) {
    Blockly.DrawerInit[name]();
  }
  Blockly.Drawer.blockInfoArray = Blockly.Drawer.createBlockInfoArray();
  // Blockly.Drawer.languageTree = Blockly.Drawer.buildTree_();
};

/**
 * [Janice, 1/23/2017] 
 * Creates a dictionary mapping each category to an array of blocks 
 * in that category. The blocks are in JSON format, and this array
 * structure makes it easier to customize/manipulate block objects.
 * Note: procedures_callreturn and procedures_callnoreturn are under
 * 'list' property, not 'type'.
 */
Blockly.Drawer.createBlockInfoArray = function() {
  var blockArray = {
    "cat_Logic": [
      {type:"logic_boolean", fieldNameToValue:{"BOOL":"TRUE"}},
      {type:"logic_boolean", fieldNameToValue:{"BOOL":"FALSE"}},
      {type:"logic_negate"},
      {type:"logic_compare",fieldNameToValue:{"OP":"EQ"}},
      {type:"logic_operation", fieldNameToValue:{"OP":"AND"}},
      {type:"logic_operation",fieldNameToValue:{"OP":"OR"}}
    ],
    "cat_Control": [
      {type:"controls_if"},
      {type:"controls_forRange", input:{
        "START":{inputType:"value",blockInfo:{type:"math_number",fieldNameToValue:{"NUM":"1"}}},
        "END":{inputType:"value",blockInfo:{type:"math_number",fieldNameToValue:{"NUM":"5"}}},
        "STEP":{inputType:"value",blockInfo:{type:"math_number",fieldNameToValue:{"NUM":"1"}}}
      }},
      {type:"controls_forEach"},
      {type:"controls_while"},
      {type:"controls_choose"},
      {type:"controls_do_then_return"},
      {type:"controls_eval_but_ignore"},
      {type:"controls_openAnotherScreen"},
      {type:"controls_openAnotherScreenWithStartValue"},
      {type:"controls_getStartValue"},
      {type:"controls_closeScreen"},
      {type:"controls_closeScreenWithValue"},
      {type:"controls_closeApplication"},
      {type:"controls_getPlainStartText"},
      {type:"controls_closeScreenWithPlainText"}
    ],
    "cat_Math": [
      {type:"math_number"},
      {type:"math_compare"},
      {type:"math_add"},
      {type:"math_subtract"},
      {type:"math_multiply"},
      {type:"math_division"},
      {type:"math_power"},
      {type:"math_random_int", input:{
        "FROM":{inputType:"value", blockInfo:{type:"math_number",fieldNameToValue:{"NUM":"1"}}},
        "TO":{inputType:"value", blockInfo:{type:"math_number", fieldNameToValue:{"NUM":"10"}}}
      }},
      {type:"math_random_float"},
      {type:"math_random_set_seed"},
      {type:"math_on_list"},
      {type:"math_single"},
      {type:"math_abs"},
      {type:"math_neg"},
      {type:"math_round"},
      {type:"math_ceiling"},
      {type:"math_floor"},
      {type:"math_divide"},
      {type:"math_trig"},
      {type:"math_cos"},
      {type:"math_tan"},
      {type:"math_atan2"},
      {type:"math_convert_angles"},
      {type:"math_format_as_decimal"},
      {type:"math_is_a_number"},
      {type:"math_convert_number"}
    ],
    "cat_Text": [
      {type:"text"},
      {type:"text_join"},
      {type:"text_length"},
      {type:"text_isEmpty"},
      {type:"text_compare"},
      {type:"text_trim"},
      {type:"text_changeCase"},
      {type:"text_starts_at"},
      {type:"text_contains"},
      {type:"text_split"},
      {type:"text_split_at_spaces"},
      {type:"text_segment"},
      {type:"text_replace_all"},
      {type:"obfuscated_text"}
    ],
    "cat_Lists": [
      {type:"lists_create_with", mutatorNameToValue:{"items":"0"}},
      {type:"lists_create_with"},
      {type:"lists_add_items"},
      {type:"lists_is_in"},
      {type:"lists_length"},
      {type:"lists_is_empty"},
      {type:"lists_pick_random_item"},
      {type:"lists_position_in"},
      {type:"lists_select_item"},
      {type:"lists_insert_item"},
      {type:"lists_replace_item"},
      {type:"lists_remove_item"},
      {type:"lists_append_list"},
      {type:"lists_copy"},
      {type:"lists_is_list"},
      {type:"lists_to_csv_row"},
      {type:"lists_to_csv_table"},
      {type:"lists_from_csv_row"},
      {type:"lists_from_csv_table"},
      {type:"lists_lookup_in_pairs", input:{
        "NOTFOUND":{inputType:"value", blockInfo:{type:"text", fieldNameToValue:{"TEXT":"not found"}}}
      }}
    ],
    "cat_Colors": [
      {type:"color_black"},
      {type:"color_white"},
      {type:"color_red"},
      {type:"color_pink"},
      {type:"color_orange"},
      {type:"color_yellow"},
      {type:"color_green"},
      {type:"color_cyan"},
      {type:"color_blue"},
      {type:"color_magenta"},
      {type:"color_light_gray"},
      {type:"color_gray"},
      {type:"color_dark_gray"},
      {type:"color_make_color", input:{
        "COLORLIST":{inputType:"value", blockInfo:{
          mutatorNameToValue:{"items":"3"},
          type:"lists_create_with", input:{
            "ADD0":{inputType:"value", blockInfo:{type:"math_number", fieldNameToValue:{"NUM":"255"}}},
            "ADD1":{inputType:"value", blockInfo:{type:"math_number", fieldNameToValue:{"NUM":"0"}}},
            "ADD2":{inputType:"value", blockInfo:{type:"math_number", fieldNameToValue:{"NUM":"0"}}}
          }
        }}
      }},
      {type:"color_split_color"}
    ],
    "cat_Variables": [
      {type:"global_declaration"},
      {type:"lexical_variable_get"},
      {type:"lexical_variable_set"},
      {type:"local_declaration_statement"},
      {type:"local_declaration_expression"}
    ],
    "cat_Procedures": [
      {type:"procedures_defnoreturn"},
      {type:"procedures_defreturn"},
      {list:"procedures_callnoreturn"},
      {list:"procedures_callreturn"}
    ]
  };
  return blockArray;
};
