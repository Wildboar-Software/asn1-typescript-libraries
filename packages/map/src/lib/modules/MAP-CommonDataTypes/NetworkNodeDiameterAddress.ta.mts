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
import { DiameterIdentity, _decode_DiameterIdentity, _encode_DiameterIdentity } from "../MAP-CommonDataTypes/DiameterIdentity.ta.mjs";


/**
 * @summary NetworkNodeDiameterAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkNodeDiameterAddress ::= SEQUENCE {
 *     diameter-Name    [0] DiameterIdentity,
 *     diameter-Realm    [1] DiameterIdentity }
 * ```
 * 
 * @class
 */
export
class NetworkNodeDiameterAddress {
    constructor (
        /**
         * @summary `diameter_Name`.
         * @public
         * @readonly
         */
        readonly diameter_Name: DiameterIdentity,
        /**
         * @summary `diameter_Realm`.
         * @public
         * @readonly
         */
        readonly diameter_Realm: DiameterIdentity
    ) {}

    /**
     * @summary Restructures an object into a NetworkNodeDiameterAddress
     * @description
     * 
     * This takes an `object` and converts it to a `NetworkNodeDiameterAddress`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NetworkNodeDiameterAddress`.
     * @returns {NetworkNodeDiameterAddress}
     */
    public static _from_object (_o: { [_K in keyof (NetworkNodeDiameterAddress)]: (NetworkNodeDiameterAddress)[_K] }): NetworkNodeDiameterAddress {
        return new NetworkNodeDiameterAddress(_o.diameter_Name, _o.diameter_Realm);
    }


}

/**
 * @summary The Leading Root Component Types of NetworkNodeDiameterAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NetworkNodeDiameterAddress: $.ComponentSpec[] = [
    new $.ComponentSpec("diameter-Name", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("diameter-Realm", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of NetworkNodeDiameterAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NetworkNodeDiameterAddress: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NetworkNodeDiameterAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NetworkNodeDiameterAddress: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NetworkNodeDiameterAddress: $.ASN1Decoder<NetworkNodeDiameterAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkNodeDiameterAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkNodeDiameterAddress (el: _Element): NetworkNodeDiameterAddress {
    if (!_cached_decoder_for_NetworkNodeDiameterAddress) { _cached_decoder_for_NetworkNodeDiameterAddress = function (el: _Element): NetworkNodeDiameterAddress {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("NetworkNodeDiameterAddress contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "diameter-Name";
    sequence[1].name = "diameter-Realm";
    let diameter_Name!: DiameterIdentity;
    let diameter_Realm!: DiameterIdentity;
    diameter_Name = $._decode_implicit<DiameterIdentity>(() => _decode_DiameterIdentity)(sequence[0]);
    diameter_Realm = $._decode_implicit<DiameterIdentity>(() => _decode_DiameterIdentity)(sequence[1]);
    return new NetworkNodeDiameterAddress(
        diameter_Name,
        diameter_Realm,

    );
}; }
    return _cached_decoder_for_NetworkNodeDiameterAddress(el);
}

let _cached_encoder_for_NetworkNodeDiameterAddress: $.ASN1Encoder<NetworkNodeDiameterAddress> | null = null;

/**
 * @summary Encodes a(n) NetworkNodeDiameterAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkNodeDiameterAddress, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkNodeDiameterAddress (value: NetworkNodeDiameterAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkNodeDiameterAddress) { _cached_encoder_for_NetworkNodeDiameterAddress = function (value: NetworkNodeDiameterAddress, elGetter: $.ASN1Encoder<NetworkNodeDiameterAddress>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DiameterIdentity, $.BER)(value.diameter_Name, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DiameterIdentity, $.BER)(value.diameter_Realm, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NetworkNodeDiameterAddress(value, elGetter);
}


/* eslint-enable */
