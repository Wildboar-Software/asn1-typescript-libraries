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
import { NetworkIdentification, _decode_NetworkIdentification, _encode_NetworkIdentification } from "../Tariffing-Data-Types/NetworkIdentification.ta.mjs";
// export { NetworkIdentification, _decode_NetworkIdentification, _encode_NetworkIdentification } from "../Tariffing-Data-Types/NetworkIdentification.ta.mjs";
import { ReferenceID, _decode_ReferenceID, _encode_ReferenceID } from "../Tariffing-Data-Types/ReferenceID.ta.mjs";
// export { ReferenceID, _decode_ReferenceID, _encode_ReferenceID } from "../Tariffing-Data-Types/ReferenceID.ta.mjs";


/**
 * @summary ChargingReferenceIdentification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingReferenceIdentification ::= SEQUENCE {
 *     networkIdentification [0] NetworkIdentification,
 *     referenceID [1] ReferenceID}
 * ```
 * 
 * @class
 */
export
class ChargingReferenceIdentification {
    constructor (
        /**
         * @summary `networkIdentification`.
         * @public
         * @readonly
         */
        readonly networkIdentification: NetworkIdentification,
        /**
         * @summary `referenceID`.
         * @public
         * @readonly
         */
        readonly referenceID: ReferenceID
    ) {}

    /**
     * @summary Restructures an object into a ChargingReferenceIdentification
     * @description
     * 
     * This takes an `object` and converts it to a `ChargingReferenceIdentification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChargingReferenceIdentification`.
     * @returns {ChargingReferenceIdentification}
     */
    public static _from_object (_o: { [_K in keyof (ChargingReferenceIdentification)]: (ChargingReferenceIdentification)[_K] }): ChargingReferenceIdentification {
        return new ChargingReferenceIdentification(_o.networkIdentification, _o.referenceID);
    }


}

/**
 * @summary The Leading Root Component Types of ChargingReferenceIdentification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChargingReferenceIdentification: $.ComponentSpec[] = [
    new $.ComponentSpec("networkIdentification", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("referenceID", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ChargingReferenceIdentification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChargingReferenceIdentification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChargingReferenceIdentification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChargingReferenceIdentification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChargingReferenceIdentification: $.ASN1Decoder<ChargingReferenceIdentification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargingReferenceIdentification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargingReferenceIdentification (el: _Element): ChargingReferenceIdentification {
    if (!_cached_decoder_for_ChargingReferenceIdentification) { _cached_decoder_for_ChargingReferenceIdentification = function (el: _Element): ChargingReferenceIdentification {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ChargingReferenceIdentification contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "networkIdentification";
    sequence[1].name = "referenceID";
    let networkIdentification!: NetworkIdentification;
    let referenceID!: ReferenceID;
    networkIdentification = $._decode_implicit<NetworkIdentification>(() => _decode_NetworkIdentification)(sequence[0]);
    referenceID = $._decode_implicit<ReferenceID>(() => _decode_ReferenceID)(sequence[1]);
    return new ChargingReferenceIdentification(
        networkIdentification,
        referenceID,

    );
}; }
    return _cached_decoder_for_ChargingReferenceIdentification(el);
}

let _cached_encoder_for_ChargingReferenceIdentification: $.ASN1Encoder<ChargingReferenceIdentification> | null = null;

/**
 * @summary Encodes a(n) ChargingReferenceIdentification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargingReferenceIdentification, encoded as an ASN.1 Element.
 */
export
function _encode_ChargingReferenceIdentification (value: ChargingReferenceIdentification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargingReferenceIdentification) { _cached_encoder_for_ChargingReferenceIdentification = function (value: ChargingReferenceIdentification, elGetter: $.ASN1Encoder<ChargingReferenceIdentification>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_NetworkIdentification, $.BER)(value.networkIdentification, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ReferenceID, $.BER)(value.referenceID, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChargingReferenceIdentification(value, elGetter);
}


/* eslint-enable */
