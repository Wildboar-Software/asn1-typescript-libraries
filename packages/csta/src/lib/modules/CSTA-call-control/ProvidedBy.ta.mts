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
import { NenaCompanyIDType, _decode_NenaCompanyIDType, _encode_NenaCompanyIDType } from "../CSTA-call-control/NenaCompanyIDType.ta.mjs";
// export { NenaCompanyIDType, _decode_NenaCompanyIDType, _encode_NenaCompanyIDType } from "../CSTA-call-control/NenaCompanyIDType.ta.mjs";
import { TelUri247Type, _decode_TelUri247Type, _encode_TelUri247Type } from "../CSTA-call-control/TelUri247Type.ta.mjs";
// export { TelUri247Type, _decode_TelUri247Type, _encode_TelUri247Type } from "../CSTA-call-control/TelUri247Type.ta.mjs";


/**
 * @summary ProvidedBy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProvidedBy ::= SEQUENCE                -- This DataType contains information about the organization
 * {                    -- which provided the allocated location data
 *     dataproviderID    NenaCompanyIDType,
 *     telUri        TelUri247Type,            -- Standard Telephone URI,
 *     uRL        IA5String }
 * ```
 * 
 * @class
 */
export
class ProvidedBy {
    constructor (
        /**
         * @summary `dataproviderID`.
         * @public
         * @readonly
         */
        readonly dataproviderID: NenaCompanyIDType,
        /**
         * @summary `telUri`.
         * @public
         * @readonly
         */
        readonly telUri: TelUri247Type,
        /**
         * @summary `uRL`.
         * @public
         * @readonly
         */
        readonly uRL: IA5String
    ) {}

    /**
     * @summary Restructures an object into a ProvidedBy
     * @description
     * 
     * This takes an `object` and converts it to a `ProvidedBy`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProvidedBy`.
     * @returns {ProvidedBy}
     */
    public static _from_object (_o: { [_K in keyof (ProvidedBy)]: (ProvidedBy)[_K] }): ProvidedBy {
        return new ProvidedBy(_o.dataproviderID, _o.telUri, _o.uRL);
    }


}

/**
 * @summary The Leading Root Component Types of ProvidedBy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProvidedBy: $.ComponentSpec[] = [
    new $.ComponentSpec("dataproviderID", false, $.hasTag(_TagClass.universal, 22), undefined, undefined),
    new $.ComponentSpec("telUri", false, $.hasTag(_TagClass.universal, 22), undefined, undefined),
    new $.ComponentSpec("uRL", false, $.hasTag(_TagClass.universal, 22), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ProvidedBy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProvidedBy: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProvidedBy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProvidedBy: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProvidedBy: $.ASN1Decoder<ProvidedBy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProvidedBy
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProvidedBy (el: _Element): ProvidedBy {
    if (!_cached_decoder_for_ProvidedBy) { _cached_decoder_for_ProvidedBy = function (el: _Element): ProvidedBy {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("ProvidedBy contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "dataproviderID";
    sequence[1].name = "telUri";
    sequence[2].name = "uRL";
    let dataproviderID!: NenaCompanyIDType;
    let telUri!: TelUri247Type;
    let uRL!: IA5String;
    dataproviderID = _decode_NenaCompanyIDType(sequence[0]);
    telUri = _decode_TelUri247Type(sequence[1]);
    uRL = $._decodeIA5String(sequence[2]);
    return new ProvidedBy(
        dataproviderID,
        telUri,
        uRL,

    );
}; }
    return _cached_decoder_for_ProvidedBy(el);
}

let _cached_encoder_for_ProvidedBy: $.ASN1Encoder<ProvidedBy> | null = null;

/**
 * @summary Encodes a(n) ProvidedBy into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProvidedBy, encoded as an ASN.1 Element.
 */
export
function _encode_ProvidedBy (value: ProvidedBy, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProvidedBy) { _cached_encoder_for_ProvidedBy = function (value: ProvidedBy, elGetter: $.ASN1Encoder<ProvidedBy>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_NenaCompanyIDType(value.dataproviderID, $.BER),
            /* REQUIRED   */ _encode_TelUri247Type(value.telUri, $.BER),
            /* REQUIRED   */ $._encodeIA5String(value.uRL, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProvidedBy(value, elGetter);
}


/* eslint-enable */
