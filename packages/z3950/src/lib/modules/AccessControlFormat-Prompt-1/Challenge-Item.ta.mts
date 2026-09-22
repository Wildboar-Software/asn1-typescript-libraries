/* eslint-disable */
import {
    EXTERNAL,
    NULL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PromptId, _decode_PromptId, _encode_PromptId } from "../AccessControlFormat-Prompt-1/PromptId.ta.mjs";
// export { PromptId, _decode_PromptId, _encode_PromptId } from "../AccessControlFormat-Prompt-1/PromptId.ta.mjs";
import { Challenge_Item_promptInfo, _decode_Challenge_Item_promptInfo, _encode_Challenge_Item_promptInfo } from "../AccessControlFormat-Prompt-1/Challenge-Item-promptInfo.ta.mjs";
// export { Challenge_Item_promptInfo, _decode_Challenge_Item_promptInfo, _encode_Challenge_Item_promptInfo } from "../AccessControlFormat-Prompt-1/Challenge-Item-promptInfo.ta.mjs";
import { Challenge_Item_dataType, _decode_Challenge_Item_dataType, _encode_Challenge_Item_dataType } from "../AccessControlFormat-Prompt-1/Challenge-Item-dataType.ta.mjs";
// export { Challenge_Item_dataType, Challenge_Item_dataType_integer /* IMPORTED_LONG_NAMED_INTEGER */, integer /* IMPORTED_SHORT_NAMED_INTEGER */, Challenge_Item_dataType_date /* IMPORTED_LONG_NAMED_INTEGER */, date /* IMPORTED_SHORT_NAMED_INTEGER */, Challenge_Item_dataType_float /* IMPORTED_LONG_NAMED_INTEGER */, float /* IMPORTED_SHORT_NAMED_INTEGER */, Challenge_Item_dataType_alphaNumeric /* IMPORTED_LONG_NAMED_INTEGER */, alphaNumeric /* IMPORTED_SHORT_NAMED_INTEGER */, Challenge_Item_dataType_url_urn /* IMPORTED_LONG_NAMED_INTEGER */, url_urn /* IMPORTED_SHORT_NAMED_INTEGER */, Challenge_Item_dataType_boolean /* IMPORTED_LONG_NAMED_INTEGER */, boolean_ /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Challenge_Item_dataType, _encode_Challenge_Item_dataType } from "../AccessControlFormat-Prompt-1/Challenge-Item-dataType.ta.mjs";


/**
 * @summary Challenge_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Challenge-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class Challenge_Item {
    constructor (
        /**
         * @summary `promptId`.
         * @public
         * @readonly
         */
        readonly promptId: PromptId,
        /**
         * @summary `defaultResponse`.
         * @public
         * @readonly
         */
        readonly defaultResponse: OPTIONAL<InternationalString>,
        /**
         * @summary `promptInfo`.
         * @public
         * @readonly
         */
        readonly promptInfo: OPTIONAL<Challenge_Item_promptInfo>,
        /**
         * @summary `regExpr`.
         * @public
         * @readonly
         */
        readonly regExpr: OPTIONAL<InternationalString>,
        /**
         * @summary `responseRequired`.
         * @public
         * @readonly
         */
        readonly responseRequired: OPTIONAL<NULL>,
        /**
         * @summary `allowedValues`.
         * @public
         * @readonly
         */
        readonly allowedValues: OPTIONAL<InternationalString[]>,
        /**
         * @summary `shouldSave`.
         * @public
         * @readonly
         */
        readonly shouldSave: OPTIONAL<NULL>,
        /**
         * @summary `dataType`.
         * @public
         * @readonly
         */
        readonly dataType: OPTIONAL<Challenge_Item_dataType>,
        /**
         * @summary `diagnostic`.
         * @public
         * @readonly
         */
        readonly diagnostic: OPTIONAL<EXTERNAL>
    ) {}

    /**
     * @summary Restructures an object into a Challenge_Item
     * @description
     * 
     * This takes an `object` and converts it to a `Challenge_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Challenge_Item`.
     * @returns {Challenge_Item}
     */
    public static _from_object (_o: { [_K in keyof (Challenge_Item)]: (Challenge_Item)[_K] }): Challenge_Item {
        return new Challenge_Item(_o.promptId, _o.defaultResponse, _o.promptInfo, _o.regExpr, _o.responseRequired, _o.allowedValues, _o.shouldSave, _o.dataType, _o.diagnostic);
    }


}

/**
 * @summary The Leading Root Component Types of Challenge_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Challenge_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("promptId", false, $.hasTag(_TagClass.context, 1)),
    /* FIXME: defaultResponse COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("promptInfo", true, $.hasTag(_TagClass.context, 3)),
    /* FIXME: regExpr COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("responseRequired", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("allowedValues", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("shouldSave", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("dataType", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("diagnostic", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of Challenge_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Challenge_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Challenge_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Challenge_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Challenge_Item: $.ASN1Decoder<Challenge_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Challenge_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Challenge_Item (el: _Element): Challenge_Item {
    if (!_cached_decoder_for_Challenge_Item) { _cached_decoder_for_Challenge_Item = function (el: _Element): Challenge_Item {
    let promptId!: PromptId;
    let defaultResponse: OPTIONAL<InternationalString>;
    let promptInfo: OPTIONAL<Challenge_Item_promptInfo>;
    let regExpr: OPTIONAL<InternationalString>;
    let responseRequired: OPTIONAL<NULL>;
    let allowedValues: OPTIONAL<InternationalString[]>;
    let shouldSave: OPTIONAL<NULL>;
    let dataType: OPTIONAL<Challenge_Item_dataType>;
    let diagnostic: OPTIONAL<EXTERNAL>;
    const callbacks: $.DecodingMap = {
        "promptId": (_el: _Element): void => { promptId = $._decode_explicit<PromptId>(() => _decode_PromptId)(_el); },
        "defaultResponse": (_el: _Element): void => { defaultResponse = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "promptInfo": (_el: _Element): void => { promptInfo = $._decode_explicit<Challenge_Item_promptInfo>(() => _decode_Challenge_Item_promptInfo)(_el); },
        "regExpr": (_el: _Element): void => { regExpr = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "responseRequired": (_el: _Element): void => { responseRequired = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "allowedValues": (_el: _Element): void => { allowedValues = $._decode_implicit<InternationalString[]>(() => $._decodeSequenceOf<InternationalString>(() => _decode_InternationalString))(_el); },
        "shouldSave": (_el: _Element): void => { shouldSave = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "dataType": (_el: _Element): void => { dataType = $._decode_implicit<Challenge_Item_dataType>(() => _decode_Challenge_Item_dataType)(_el); },
        "diagnostic": (_el: _Element): void => { diagnostic = $._decode_implicit<EXTERNAL>(() => $._decodeExternal)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Challenge_Item,
        _extension_additions_list_spec_for_Challenge_Item,
        _root_component_type_list_2_spec_for_Challenge_Item,
        undefined,
    );
    return new Challenge_Item(
        promptId,
        defaultResponse,
        promptInfo,
        regExpr,
        responseRequired,
        allowedValues,
        shouldSave,
        dataType,
        diagnostic
    );
}; }
    return _cached_decoder_for_Challenge_Item(el);
}

let _cached_encoder_for_Challenge_Item: $.ASN1Encoder<Challenge_Item> | null = null;

/**
 * @summary Encodes a(n) Challenge_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Challenge_Item, encoded as an ASN.1 Element.
 */
export
function _encode_Challenge_Item (value: Challenge_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Challenge_Item) { _cached_encoder_for_Challenge_Item = function (value: Challenge_Item, elGetter: $.ASN1Encoder<Challenge_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_PromptId, $.BER)(value.promptId, $.BER),
            /* IF_ABSENT  */ ((value.defaultResponse === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.defaultResponse, $.BER)),
            /* IF_ABSENT  */ ((value.promptInfo === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_Challenge_Item_promptInfo, $.BER)(value.promptInfo, $.BER)),
            /* IF_ABSENT  */ ((value.regExpr === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_InternationalString, $.BER)(value.regExpr, $.BER)),
            /* IF_ABSENT  */ ((value.responseRequired === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER)(value.responseRequired, $.BER)),
            /* IF_ABSENT  */ ((value.allowedValues === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER)(value.allowedValues, $.BER)),
            /* IF_ABSENT  */ ((value.shouldSave === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER)(value.shouldSave, $.BER)),
            /* IF_ABSENT  */ ((value.dataType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_Challenge_Item_dataType, $.BER)(value.dataType, $.BER)),
            /* IF_ABSENT  */ ((value.diagnostic === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeExternal, $.BER)(value.diagnostic, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Challenge_Item(value, elGetter);
}


/* eslint-enable */
