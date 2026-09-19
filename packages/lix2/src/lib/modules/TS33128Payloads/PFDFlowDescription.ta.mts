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
import { NextLayerProtocol, _decode_NextLayerProtocol, _encode_NextLayerProtocol } from "../TS33128Payloads/NextLayerProtocol.ta.mjs";
// export { NextLayerProtocol, _decode_NextLayerProtocol, _encode_NextLayerProtocol } from "../TS33128Payloads/NextLayerProtocol.ta.mjs";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
import { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";
// export { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";


/**
 * @summary PFDFlowDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PFDFlowDescription ::= SEQUENCE
 * {
 *     nextLayerProtocol [1] NextLayerProtocol,
 *     serverIPAddress   [2] IPAddress,
 *     serverPortNumber  [3] PortNumber
 * }
 * ```
 * 
 * @class
 */
export
class PFDFlowDescription {
    constructor (
        /**
         * @summary `nextLayerProtocol`.
         * @public
         * @readonly
         */
        readonly nextLayerProtocol: NextLayerProtocol,
        /**
         * @summary `serverIPAddress`.
         * @public
         * @readonly
         */
        readonly serverIPAddress: IPAddress,
        /**
         * @summary `serverPortNumber`.
         * @public
         * @readonly
         */
        readonly serverPortNumber: PortNumber
    ) {}

    /**
     * @summary Restructures an object into a PFDFlowDescription
     * @description
     * 
     * This takes an `object` and converts it to a `PFDFlowDescription`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PFDFlowDescription`.
     * @returns {PFDFlowDescription}
     */
    public static _from_object (_o: { [_K in keyof (PFDFlowDescription)]: (PFDFlowDescription)[_K] }): PFDFlowDescription {
        return new PFDFlowDescription(_o.nextLayerProtocol, _o.serverIPAddress, _o.serverPortNumber);
    }


}

/**
 * @summary The Leading Root Component Types of PFDFlowDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PFDFlowDescription: $.ComponentSpec[] = [
    new $.ComponentSpec("nextLayerProtocol", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serverIPAddress", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("serverPortNumber", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of PFDFlowDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PFDFlowDescription: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PFDFlowDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PFDFlowDescription: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PFDFlowDescription: $.ASN1Decoder<PFDFlowDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PFDFlowDescription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PFDFlowDescription (el: _Element): PFDFlowDescription {
    if (!_cached_decoder_for_PFDFlowDescription) { _cached_decoder_for_PFDFlowDescription = function (el: _Element): PFDFlowDescription {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("PFDFlowDescription contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "nextLayerProtocol";
    sequence[1].name = "serverIPAddress";
    sequence[2].name = "serverPortNumber";
    let nextLayerProtocol!: NextLayerProtocol;
    let serverIPAddress!: IPAddress;
    let serverPortNumber!: PortNumber;
    nextLayerProtocol = $._decode_implicit<NextLayerProtocol>(() => _decode_NextLayerProtocol)(sequence[0]);
    serverIPAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(sequence[1]);
    serverPortNumber = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(sequence[2]);
    return new PFDFlowDescription(
        nextLayerProtocol,
        serverIPAddress,
        serverPortNumber,

    );
}; }
    return _cached_decoder_for_PFDFlowDescription(el);
}

let _cached_encoder_for_PFDFlowDescription: $.ASN1Encoder<PFDFlowDescription> | null = null;

/**
 * @summary Encodes a(n) PFDFlowDescription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PFDFlowDescription, encoded as an ASN.1 Element.
 */
export
function _encode_PFDFlowDescription (value: PFDFlowDescription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PFDFlowDescription) { _cached_encoder_for_PFDFlowDescription = function (value: PFDFlowDescription, elGetter: $.ASN1Encoder<PFDFlowDescription>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_NextLayerProtocol, $.BER)(value.nextLayerProtocol, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_IPAddress, $.BER)(value.serverIPAddress, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PortNumber, $.BER)(value.serverPortNumber, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PFDFlowDescription(value, elGetter);
}


/* eslint-enable */
