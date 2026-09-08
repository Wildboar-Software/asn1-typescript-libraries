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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ProgressIndicator_progressLocation, _enum_for_ProgressIndicator_progressLocation, ProgressIndicator_progressLocation_user /* IMPORTED_LONG_ENUMERATION_ITEM */, user /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProgressIndicator_progressLocation_privateNetServingLocal /* IMPORTED_LONG_ENUMERATION_ITEM */, privateNetServingLocal /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProgressIndicator_progressLocation_publicNetServingLocal /* IMPORTED_LONG_ENUMERATION_ITEM */, publicNetServingLocal /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProgressIndicator_progressLocation_transitNetwork /* IMPORTED_LONG_ENUMERATION_ITEM */, transitNetwork /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProgressIndicator_progressLocation_publicNetServingRemote /* IMPORTED_LONG_ENUMERATION_ITEM */, publicNetServingRemote /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProgressIndicator_progressLocation_privateNetServingRemote /* IMPORTED_LONG_ENUMERATION_ITEM */, privateNetServingRemote /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProgressIndicator_progressLocation_localInterface /* IMPORTED_LONG_ENUMERATION_ITEM */, localInterface /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProgressIndicator_progressLocation_internationalNetwork /* IMPORTED_LONG_ENUMERATION_ITEM */, internationalNetwork /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProgressIndicator_progressLocation_networkBeyondInterwk /* IMPORTED_LONG_ENUMERATION_ITEM */, networkBeyondInterwk /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProgressIndicator_progressLocation_other /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_ProgressIndicator_progressLocation, _encode_ProgressIndicator_progressLocation } from "../CSTA-call-control/ProgressIndicator-progressLocation.ta.mjs";
// export { ProgressIndicator_progressLocation, _enum_for_ProgressIndicator_progressLocation, ProgressIndicator_progressLocation_user /* IMPORTED_LONG_ENUMERATION_ITEM */, user /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProgressIndicator_progressLocation_privateNetServingLocal /* IMPORTED_LONG_ENUMERATION_ITEM */, privateNetServingLocal /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProgressIndicator_progressLocation_publicNetServingLocal /* IMPORTED_LONG_ENUMERATION_ITEM */, publicNetServingLocal /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProgressIndicator_progressLocation_transitNetwork /* IMPORTED_LONG_ENUMERATION_ITEM */, transitNetwork /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProgressIndicator_progressLocation_publicNetServingRemote /* IMPORTED_LONG_ENUMERATION_ITEM */, publicNetServingRemote /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProgressIndicator_progressLocation_privateNetServingRemote /* IMPORTED_LONG_ENUMERATION_ITEM */, privateNetServingRemote /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProgressIndicator_progressLocation_localInterface /* IMPORTED_LONG_ENUMERATION_ITEM */, localInterface /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProgressIndicator_progressLocation_internationalNetwork /* IMPORTED_LONG_ENUMERATION_ITEM */, internationalNetwork /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProgressIndicator_progressLocation_networkBeyondInterwk /* IMPORTED_LONG_ENUMERATION_ITEM */, networkBeyondInterwk /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProgressIndicator_progressLocation_other /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_ProgressIndicator_progressLocation, _encode_ProgressIndicator_progressLocation } from "../CSTA-call-control/ProgressIndicator-progressLocation.ta.mjs";
import { ProgressIndicator_progressDescription, _enum_for_ProgressIndicator_progressDescription, ProgressIndicator_progressDescription_iSDNProgressDesc /* IMPORTED_LONG_ENUMERATION_ITEM */, iSDNProgressDesc /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProgressIndicator_progressDescription_qSIGProgressDesc /* IMPORTED_LONG_ENUMERATION_ITEM */, qSIGProgressDesc /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProgressIndicator_progressDescription_other /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_ProgressIndicator_progressDescription, _encode_ProgressIndicator_progressDescription } from "../CSTA-call-control/ProgressIndicator-progressDescription.ta.mjs";
// export { ProgressIndicator_progressDescription, _enum_for_ProgressIndicator_progressDescription, ProgressIndicator_progressDescription_iSDNProgressDesc /* IMPORTED_LONG_ENUMERATION_ITEM */, iSDNProgressDesc /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProgressIndicator_progressDescription_qSIGProgressDesc /* IMPORTED_LONG_ENUMERATION_ITEM */, qSIGProgressDesc /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProgressIndicator_progressDescription_other /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_ProgressIndicator_progressDescription, _encode_ProgressIndicator_progressDescription } from "../CSTA-call-control/ProgressIndicator-progressDescription.ta.mjs";


/**
 * @summary ProgressIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProgressIndicator ::= SEQUENCE
 * {     progressLocation ENUMERATED
 *     {     user                     ( 0),
 *         privateNetServingLocal             ( 1),
 *         publicNetServingLocal             ( 2),
 *         transitNetwork                 ( 3),
 *         publicNetServingRemote             ( 4),
 *         privateNetServingRemote         ( 5),
 *         localInterface                 ( 6),
 *         internationalNetwork             ( 7),
 *         networkBeyondInterwk             ( 8),
 *         other                     ( 9) },
 *     progressDescription ENUMERATED
 *     {     iSDNProgressDesc             ( 0),
 *         qSIGProgressDesc             ( 1),
 *         other                     ( 2) } }
 * ```
 * 
 * @class
 */
export
class ProgressIndicator {
    constructor (
        /**
         * @summary `progressLocation`.
         * @public
         * @readonly
         */
        readonly progressLocation: ProgressIndicator_progressLocation,
        /**
         * @summary `progressDescription`.
         * @public
         * @readonly
         */
        readonly progressDescription: ProgressIndicator_progressDescription
    ) {}

    /**
     * @summary Restructures an object into a ProgressIndicator
     * @description
     * 
     * This takes an `object` and converts it to a `ProgressIndicator`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProgressIndicator`.
     * @returns {ProgressIndicator}
     */
    public static _from_object (_o: { [_K in keyof (ProgressIndicator)]: (ProgressIndicator)[_K] }): ProgressIndicator {
        return new ProgressIndicator(_o.progressLocation, _o.progressDescription);
    }

        /**
         * @summary The enum used as the type of the component `progressLocation`
         * @public
         * @static
         */

    public static _enum_for_progressLocation = _enum_for_ProgressIndicator_progressLocation;        /**
         * @summary The enum used as the type of the component `progressDescription`
         * @public
         * @static
         */

    public static _enum_for_progressDescription = _enum_for_ProgressIndicator_progressDescription;
}

/**
 * @summary The Leading Root Component Types of ProgressIndicator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProgressIndicator: $.ComponentSpec[] = [
    new $.ComponentSpec("progressLocation", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("progressDescription", false, $.hasTag(_TagClass.universal, 10), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ProgressIndicator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProgressIndicator: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProgressIndicator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProgressIndicator: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProgressIndicator: $.ASN1Decoder<ProgressIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProgressIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProgressIndicator (el: _Element): ProgressIndicator {
    if (!_cached_decoder_for_ProgressIndicator) { _cached_decoder_for_ProgressIndicator = function (el: _Element): ProgressIndicator {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ProgressIndicator contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "progressLocation";
    sequence[1].name = "progressDescription";
    let progressLocation!: ProgressIndicator_progressLocation;
    let progressDescription!: ProgressIndicator_progressDescription;
    progressLocation = _decode_ProgressIndicator_progressLocation(sequence[0]);
    progressDescription = _decode_ProgressIndicator_progressDescription(sequence[1]);
    return new ProgressIndicator(
        progressLocation,
        progressDescription,

    );
}; }
    return _cached_decoder_for_ProgressIndicator(el);
}

let _cached_encoder_for_ProgressIndicator: $.ASN1Encoder<ProgressIndicator> | null = null;

/**
 * @summary Encodes a(n) ProgressIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProgressIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_ProgressIndicator (value: ProgressIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProgressIndicator) { _cached_encoder_for_ProgressIndicator = function (value: ProgressIndicator, elGetter: $.ASN1Encoder<ProgressIndicator>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ProgressIndicator_progressLocation(value.progressLocation, $.BER),
            /* REQUIRED   */ _encode_ProgressIndicator_progressDescription(value.progressDescription, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProgressIndicator(value, elGetter);
}


/* eslint-enable */
