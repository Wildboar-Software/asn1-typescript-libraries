/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PrivacyCheckRelatedAction, _enum_for_PrivacyCheckRelatedAction, PrivacyCheckRelatedAction_allowedWithoutNotification /* IMPORTED_LONG_ENUMERATION_ITEM */, allowedWithoutNotification /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrivacyCheckRelatedAction_allowedWithNotification /* IMPORTED_LONG_ENUMERATION_ITEM */, allowedWithNotification /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrivacyCheckRelatedAction_allowedIfNoResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, allowedIfNoResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrivacyCheckRelatedAction_restrictedIfNoResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, restrictedIfNoResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrivacyCheckRelatedAction_notAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, notAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PrivacyCheckRelatedAction, _encode_PrivacyCheckRelatedAction } from "../MAP-LCS-DataTypes/PrivacyCheckRelatedAction.ta.mjs";


/**
 * @summary LCS_PrivacyCheck
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCS-PrivacyCheck ::= SEQUENCE {
 *     callSessionUnrelated    [0] PrivacyCheckRelatedAction,
 *     callSessionRelated    [1] PrivacyCheckRelatedAction    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class LCS_PrivacyCheck {
    constructor (
        /**
         * @summary `callSessionUnrelated`.
         * @public
         * @readonly
         */
        readonly callSessionUnrelated: PrivacyCheckRelatedAction,
        /**
         * @summary `callSessionRelated`.
         * @public
         * @readonly
         */
        readonly callSessionRelated: OPTIONAL<PrivacyCheckRelatedAction>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LCS_PrivacyCheck
     * @description
     * 
     * This takes an `object` and converts it to a `LCS_PrivacyCheck`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LCS_PrivacyCheck`.
     * @returns {LCS_PrivacyCheck}
     */
    public static _from_object (_o: { [_K in keyof (LCS_PrivacyCheck)]: (LCS_PrivacyCheck)[_K] }): LCS_PrivacyCheck {
        return new LCS_PrivacyCheck(_o.callSessionUnrelated, _o.callSessionRelated, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `callSessionUnrelated`
         * @public
         * @static
         */

    public static _enum_for_callSessionUnrelated = _enum_for_PrivacyCheckRelatedAction;        /**
         * @summary The enum used as the type of the component `callSessionRelated`
         * @public
         * @static
         */

    public static _enum_for_callSessionRelated = _enum_for_PrivacyCheckRelatedAction;
}

/**
 * @summary The Leading Root Component Types of LCS_PrivacyCheck
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LCS_PrivacyCheck: $.ComponentSpec[] = [
    new $.ComponentSpec("callSessionUnrelated", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callSessionRelated", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of LCS_PrivacyCheck
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LCS_PrivacyCheck: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LCS_PrivacyCheck
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LCS_PrivacyCheck: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LCS_PrivacyCheck: $.ASN1Decoder<LCS_PrivacyCheck> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCS_PrivacyCheck
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCS_PrivacyCheck (el: _Element): LCS_PrivacyCheck {
    if (!_cached_decoder_for_LCS_PrivacyCheck) { _cached_decoder_for_LCS_PrivacyCheck = function (el: _Element): LCS_PrivacyCheck {
    let callSessionUnrelated!: PrivacyCheckRelatedAction;
    let callSessionRelated: OPTIONAL<PrivacyCheckRelatedAction> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "callSessionUnrelated": (_el: _Element): void => { callSessionUnrelated = $._decode_implicit<PrivacyCheckRelatedAction>(() => _decode_PrivacyCheckRelatedAction)(_el); },
        "callSessionRelated": (_el: _Element): void => { callSessionRelated = $._decode_implicit<PrivacyCheckRelatedAction>(() => _decode_PrivacyCheckRelatedAction)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LCS_PrivacyCheck,
        _extension_additions_list_spec_for_LCS_PrivacyCheck,
        _root_component_type_list_2_spec_for_LCS_PrivacyCheck,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LCS_PrivacyCheck(
        callSessionUnrelated,
        callSessionRelated,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LCS_PrivacyCheck(el);
}

let _cached_encoder_for_LCS_PrivacyCheck: $.ASN1Encoder<LCS_PrivacyCheck> | null = null;

/**
 * @summary Encodes a(n) LCS_PrivacyCheck into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCS_PrivacyCheck, encoded as an ASN.1 Element.
 */
export
function _encode_LCS_PrivacyCheck (value: LCS_PrivacyCheck, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCS_PrivacyCheck) { _cached_encoder_for_LCS_PrivacyCheck = function (value: LCS_PrivacyCheck, elGetter: $.ASN1Encoder<LCS_PrivacyCheck>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_PrivacyCheckRelatedAction, $.BER)(value.callSessionUnrelated, $.BER),
            /* IF_ABSENT  */ ((value.callSessionRelated === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_PrivacyCheckRelatedAction, $.BER)(value.callSessionRelated, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LCS_PrivacyCheck(value, elGetter);
}


/* eslint-enable */
