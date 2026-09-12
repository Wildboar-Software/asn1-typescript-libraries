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
import { AP_title, _decode_AP_title, _encode_AP_title } from "../ACSE-1/AP-title.ta.mjs";
// export { AP_title, _decode_AP_title, _encode_AP_title } from "../ACSE-1/AP-title.ta.mjs";
import { AP_invocation_identifier, _decode_AP_invocation_identifier, _encode_AP_invocation_identifier } from "../ACSE-1/AP-invocation-identifier.ta.mjs";
// export { AP_invocation_identifier, _decode_AP_invocation_identifier, _encode_AP_invocation_identifier } from "../ACSE-1/AP-invocation-identifier.ta.mjs";
import { AE_qualifier, _decode_AE_qualifier, _encode_AE_qualifier } from "../ACSE-1/AE-qualifier.ta.mjs";
// export { AE_qualifier, _decode_AE_qualifier, _encode_AE_qualifier } from "../ACSE-1/AE-qualifier.ta.mjs";
import { AE_invocation_identifier, _decode_AE_invocation_identifier, _encode_AE_invocation_identifier } from "../ACSE-1/AE-invocation-identifier.ta.mjs";
// export { AE_invocation_identifier, _decode_AE_invocation_identifier, _encode_AE_invocation_identifier } from "../ACSE-1/AE-invocation-identifier.ta.mjs";


/**
 * @summary ApplicationReference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplicationReference ::= SEQUENCE {
 *     ap-title            [0] AP-title OPTIONAL,
 *     ap-invocation-id    [1] AP-invocation-identifier OPTIONAL,
 *     ae-qualifier        [2] AE-qualifier OPTIONAL,
 *     ae-invocation-id    [3] AE-invocation-identifier OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ApplicationReference {
    constructor (
        /**
         * @summary `ap_title`.
         * @public
         * @readonly
         */
        readonly ap_title: OPTIONAL<AP_title>,
        /**
         * @summary `ap_invocation_id`.
         * @public
         * @readonly
         */
        readonly ap_invocation_id: OPTIONAL<AP_invocation_identifier>,
        /**
         * @summary `ae_qualifier`.
         * @public
         * @readonly
         */
        readonly ae_qualifier: OPTIONAL<AE_qualifier>,
        /**
         * @summary `ae_invocation_id`.
         * @public
         * @readonly
         */
        readonly ae_invocation_id: OPTIONAL<AE_invocation_identifier>
    ) {}

    /**
     * @summary Restructures an object into a ApplicationReference
     * @description
     * 
     * This takes an `object` and converts it to a `ApplicationReference`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ApplicationReference`.
     * @returns {ApplicationReference}
     */
    public static _from_object (_o: { [_K in keyof (ApplicationReference)]: (ApplicationReference)[_K] }): ApplicationReference {
        return new ApplicationReference(_o.ap_title, _o.ap_invocation_id, _o.ae_qualifier, _o.ae_invocation_id);
    }


}

/**
 * @summary The Leading Root Component Types of ApplicationReference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ApplicationReference: $.ComponentSpec[] = [
    new $.ComponentSpec("ap-title", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("ap-invocation-id", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ae-qualifier", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ae-invocation-id", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ApplicationReference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ApplicationReference: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ApplicationReference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ApplicationReference: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ApplicationReference: $.ASN1Decoder<ApplicationReference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationReference
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ApplicationReference (el: _Element): ApplicationReference {
    if (!_cached_decoder_for_ApplicationReference) { _cached_decoder_for_ApplicationReference = function (el: _Element): ApplicationReference {
    let ap_title: OPTIONAL<AP_title>;
    let ap_invocation_id: OPTIONAL<AP_invocation_identifier>;
    let ae_qualifier: OPTIONAL<AE_qualifier>;
    let ae_invocation_id: OPTIONAL<AE_invocation_identifier>;
    const callbacks: $.DecodingMap = {
        "ap-title": (_el: _Element): void => { ap_title = $._decode_explicit<AP_title>(() => _decode_AP_title)(_el); },
        "ap-invocation-id": (_el: _Element): void => { ap_invocation_id = $._decode_explicit<AP_invocation_identifier>(() => _decode_AP_invocation_identifier)(_el); },
        "ae-qualifier": (_el: _Element): void => { ae_qualifier = $._decode_explicit<AE_qualifier>(() => _decode_AE_qualifier)(_el); },
        "ae-invocation-id": (_el: _Element): void => { ae_invocation_id = $._decode_explicit<AE_invocation_identifier>(() => _decode_AE_invocation_identifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ApplicationReference,
        _extension_additions_list_spec_for_ApplicationReference,
        _root_component_type_list_2_spec_for_ApplicationReference,
        undefined,
    );
    return new ApplicationReference(
        ap_title,
        ap_invocation_id,
        ae_qualifier,
        ae_invocation_id
    );
}; }
    return _cached_decoder_for_ApplicationReference(el);
}

let _cached_encoder_for_ApplicationReference: $.ASN1Encoder<ApplicationReference> | null = null;

/**
 * @summary Encodes a(n) ApplicationReference into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationReference, encoded as an ASN.1 Element.
 */
export
function _encode_ApplicationReference (value: ApplicationReference, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ApplicationReference) { _cached_encoder_for_ApplicationReference = function (value: ApplicationReference, elGetter: $.ASN1Encoder<ApplicationReference>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.ap_title === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_AP_title, $.BER)(value.ap_title, $.BER)),
            /* IF_ABSENT  */ ((value.ap_invocation_id === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_AP_invocation_identifier, $.BER)(value.ap_invocation_id, $.BER)),
            /* IF_ABSENT  */ ((value.ae_qualifier === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_AE_qualifier, $.BER)(value.ae_qualifier, $.BER)),
            /* IF_ABSENT  */ ((value.ae_invocation_id === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_AE_invocation_identifier, $.BER)(value.ae_invocation_id, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ApplicationReference(value, elGetter);
}


/* eslint-enable */
