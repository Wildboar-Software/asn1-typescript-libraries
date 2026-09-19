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
import { BodyPartSecurityLabel, _decode_BodyPartSecurityLabel, _encode_BodyPartSecurityLabel } from "../MMSHeadingExtensions/BodyPartSecurityLabel.ta.mjs";
// export { BodyPartSecurityLabel, _decode_BodyPartSecurityLabel, _encode_BodyPartSecurityLabel } from "../MMSHeadingExtensions/BodyPartSecurityLabel.ta.mjs";


/**
 * @summary SecurityInformationLabels
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityInformationLabels ::= SEQUENCE {
 *   content-security-label     [0]  SecurityLabel,
 *   -- SecurityLabel as defined in 8.5.9 of ITU-T X.411
 *   heading-security-label     [1]  SecurityLabel OPTIONAL,
 *   body-part-security-labels  [2]  SEQUENCE OF BodyPartSecurityLabel OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SecurityInformationLabels {
    constructor (
        /**
         * @summary `content_security_label`.
         * @public
         * @readonly
         */
        readonly content_security_label: SecurityLabel,
        /**
         * @summary `heading_security_label`.
         * @public
         * @readonly
         */
        readonly heading_security_label: OPTIONAL<SecurityLabel>,
        /**
         * @summary `body_part_security_labels`.
         * @public
         * @readonly
         */
        readonly body_part_security_labels: OPTIONAL<BodyPartSecurityLabel[]>
    ) {}

    /**
     * @summary Restructures an object into a SecurityInformationLabels
     * @description
     * 
     * This takes an `object` and converts it to a `SecurityInformationLabels`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecurityInformationLabels`.
     * @returns {SecurityInformationLabels}
     */
    public static _from_object (_o: { [_K in keyof (SecurityInformationLabels)]: (SecurityInformationLabels)[_K] }): SecurityInformationLabels {
        return new SecurityInformationLabels(_o.content_security_label, _o.heading_security_label, _o.body_part_security_labels);
    }


}

/**
 * @summary The Leading Root Component Types of SecurityInformationLabels
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SecurityInformationLabels: $.ComponentSpec[] = [
    /* FIXME: content-security-label COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: heading-security-label COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("body-part-security-labels", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SecurityInformationLabels
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SecurityInformationLabels: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SecurityInformationLabels
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SecurityInformationLabels: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SecurityInformationLabels: $.ASN1Decoder<SecurityInformationLabels> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityInformationLabels
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecurityInformationLabels (el: _Element): SecurityInformationLabels {
    if (!_cached_decoder_for_SecurityInformationLabels) { _cached_decoder_for_SecurityInformationLabels = function (el: _Element): SecurityInformationLabels {
    let content_security_label!: SecurityLabel;
    let heading_security_label: OPTIONAL<SecurityLabel>;
    let body_part_security_labels: OPTIONAL<BodyPartSecurityLabel[]>;
    const callbacks: $.DecodingMap = {
        "content-security-label": (_el: _Element): void => { content_security_label = $._decode_implicit<SecurityLabel>(() => _decode_SecurityLabel)(_el); },
        "heading-security-label": (_el: _Element): void => { heading_security_label = $._decode_implicit<SecurityLabel>(() => _decode_SecurityLabel)(_el); },
        "body-part-security-labels": (_el: _Element): void => { body_part_security_labels = $._decode_implicit<BodyPartSecurityLabel[]>(() => $._decodeSequenceOf<BodyPartSecurityLabel>(() => _decode_BodyPartSecurityLabel))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SecurityInformationLabels,
        _extension_additions_list_spec_for_SecurityInformationLabels,
        _root_component_type_list_2_spec_for_SecurityInformationLabels,
        undefined,
    );
    return new SecurityInformationLabels(
        content_security_label,
        heading_security_label,
        body_part_security_labels
    );
}; }
    return _cached_decoder_for_SecurityInformationLabels(el);
}

let _cached_encoder_for_SecurityInformationLabels: $.ASN1Encoder<SecurityInformationLabels> | null = null;

/**
 * @summary Encodes a(n) SecurityInformationLabels into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityInformationLabels, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityInformationLabels (value: SecurityInformationLabels, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecurityInformationLabels) { _cached_encoder_for_SecurityInformationLabels = function (value: SecurityInformationLabels, elGetter: $.ASN1Encoder<SecurityInformationLabels>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SecurityLabel, $.BER)(value.content_security_label, $.BER),
            /* IF_ABSENT  */ ((value.heading_security_label === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_SecurityLabel, $.BER)(value.heading_security_label, $.BER)),
            /* IF_ABSENT  */ ((value.body_part_security_labels === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<BodyPartSecurityLabel>(() => _encode_BodyPartSecurityLabel, $.BER), $.BER)(value.body_part_security_labels, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SecurityInformationLabels(value, elGetter);
}


/* eslint-enable */
