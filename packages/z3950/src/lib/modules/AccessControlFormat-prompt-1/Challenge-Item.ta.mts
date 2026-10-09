/* eslint-disable */
import {
    EXTERNAL,
    NULL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PromptId, _decode_PromptId, _encode_PromptId } from "../AccessControlFormat-prompt-1/PromptId.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { Challenge_Item_promptInfo, _decode_Challenge_Item_promptInfo, _encode_Challenge_Item_promptInfo } from "../AccessControlFormat-prompt-1/Challenge-Item-promptInfo.ta.mjs";
import { Challenge_Item_dataType, _decode_Challenge_Item_dataType, _encode_Challenge_Item_dataType } from "../AccessControlFormat-prompt-1/Challenge-Item-dataType.ta.mjs";


/**
 * @summary Challenge_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Challenge-Item ::= SEQUENCE {
 *     promptId [1] PromptId,
 *     -- See comment 1
 *     defaultResponse [2] IMPLICIT InternationalString OPTIONAL,
 *     promptInfo [3] CHOICE {
 *         character [1] IMPLICIT InternationalString,
 *         encrypted [2] IMPLICIT Encryption
 *     } OPTIONAL,
 *     -- See comment 2
 *     regExpr [4] IMPLICIT InternationalString OPTIONAL,
 *     -- See comment 3
 *     responseRequired [5] IMPLICIT NULL OPTIONAL,
 *     allowedValues [6] IMPLICIT SEQUENCE OF InternationalString OPTIONAL,
 *     --e.g. promptId="Desired color"; allowed = 'red', 'blue','Green'
 *     shouldSave [7] IMPLICIT NULL OPTIONAL,
 *     -- See comment 4
 *     dataType [8] IMPLICIT INTEGER {
 *         integer (1),
 *         date (2),
 *         float (3),
 *         alphaNumeric (4),
 *         url-urn (5),
 *         boolean (6)
 *     } OPTIONAL,
 *     -- See comment 5
 *     diagnostic [9] IMPLICIT EXTERNAL OPTIONAL  -- Intended for repeat requests when there is an error
 *     -- the client should report to the user from previous attempt.
 * }
 * ```
 * 
 * @class
 */
export
class Challenge_Item {
    /**
     * @summary `promptId`.
     * @public
     * @readonly
     */
    readonly promptId: PromptId;
    /**
     * @summary `defaultResponse`.
     * @public
     * @readonly
     */
    readonly defaultResponse: OPTIONAL<InternationalString>;
    /**
     * @summary `promptInfo`.
     * @public
     * @readonly
     */
    readonly promptInfo: OPTIONAL<Challenge_Item_promptInfo>;
    /**
     * @summary `regExpr`.
     * @public
     * @readonly
     */
    readonly regExpr: OPTIONAL<InternationalString>;
    /**
     * @summary `responseRequired`.
     * @public
     * @readonly
     */
    readonly responseRequired: OPTIONAL<NULL>;
    /**
     * @summary `allowedValues`.
     * @public
     * @readonly
     */
    readonly allowedValues: OPTIONAL<InternationalString[]>;
    /**
     * @summary `shouldSave`.
     * @public
     * @readonly
     */
    readonly shouldSave: OPTIONAL<NULL>;
    /**
     * @summary `dataType`.
     * @public
     * @readonly
     */
    readonly dataType: OPTIONAL<Challenge_Item_dataType>;
    /**
     * @summary `diagnostic`.
     * @public
     * @readonly
     */
    readonly diagnostic: OPTIONAL<EXTERNAL>;

    constructor (
        promptId: PromptId,
        defaultResponse: OPTIONAL<InternationalString>,
        promptInfo: OPTIONAL<Challenge_Item_promptInfo>,
        regExpr: OPTIONAL<InternationalString>,
        responseRequired: OPTIONAL<NULL>,
        allowedValues: OPTIONAL<InternationalString[]>,
        shouldSave: OPTIONAL<NULL>,
        dataType: OPTIONAL<Challenge_Item_dataType>,
        diagnostic: OPTIONAL<EXTERNAL>
    ) {
        this.promptId = promptId;
        this.defaultResponse = defaultResponse;
        this.promptInfo = promptInfo;
        this.regExpr = regExpr;
        this.responseRequired = responseRequired;
        this.allowedValues = allowedValues;
        this.shouldSave = shouldSave;
        this.dataType = dataType;
        this.diagnostic = diagnostic;
    }

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
    new $.ComponentSpec("defaultResponse", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("promptInfo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("regExpr", true, $.hasTag(_TagClass.context, 4)),
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
    const _components: _Element[] = new Array(9);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_PromptId, $.BER)(value.promptId, $.BER);
    if (value.defaultResponse !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.defaultResponse, $.BER);
    }
    if (value.promptInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_Challenge_Item_promptInfo, $.BER)(value.promptInfo, $.BER);
    }
    if (value.regExpr !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_InternationalString, $.BER)(value.regExpr, $.BER);
    }
    if (value.responseRequired !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER)(value.responseRequired, $.BER);
    }
    if (value.allowedValues !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER)(value.allowedValues, $.BER);
    }
    if (value.shouldSave !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER)(value.shouldSave, $.BER);
    }
    if (value.dataType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_Challenge_Item_dataType, $.BER)(value.dataType, $.BER);
    }
    if (value.diagnostic !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeExternal, $.BER)(value.diagnostic, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Challenge_Item(value, elGetter);
}


/* eslint-enable */
