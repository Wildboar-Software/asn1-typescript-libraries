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
import { PINEIdentities, _decode_PINEIdentities, _encode_PINEIdentities } from "../TS33128Payloads/PINEIdentities.ta.mjs";
// export { PINEIdentities, _decode_PINEIdentities, _encode_PINEIdentities } from "../TS33128Payloads/PINEIdentities.ta.mjs";
import { MACAddress, _decode_MACAddress, _encode_MACAddress } from "../TS33128Payloads/MACAddress.ta.mjs";
// export { MACAddress, _decode_MACAddress, _encode_MACAddress } from "../TS33128Payloads/MACAddress.ta.mjs";
import { PINID, _decode_PINID, _encode_PINID } from "../TS33128Payloads/PINID.ta.mjs";
// export { PINID, _decode_PINID, _encode_PINID } from "../TS33128Payloads/PINID.ta.mjs";
import { PINServerID, _decode_PINServerID, _encode_PINServerID } from "../TS33128Payloads/PINServerID.ta.mjs";
// export { PINServerID, _decode_PINServerID, _encode_PINServerID } from "../TS33128Payloads/PINServerID.ta.mjs";
import { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";
// export { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";


/**
 * @summary FiveGPINAPPMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGPINAPPMessage ::= SEQUENCE
 * {
 *     pINEIdentities            [1] PINEIdentities,
 *     mACAddress                [2] MACAddress OPTIONAL,
 *     pINID                     [3] PINID OPTIONAL,
 *     pINServerID               [4] PINServerID,
 *     pINAPPMessage             [5] XMLType
 * }
 * ```
 * 
 * @class
 */
export
class FiveGPINAPPMessage {
    constructor (
        /**
         * @summary `pINEIdentities`.
         * @public
         * @readonly
         */
        readonly pINEIdentities: PINEIdentities,
        /**
         * @summary `mACAddress`.
         * @public
         * @readonly
         */
        readonly mACAddress: OPTIONAL<MACAddress>,
        /**
         * @summary `pINID`.
         * @public
         * @readonly
         */
        readonly pINID: OPTIONAL<PINID>,
        /**
         * @summary `pINServerID`.
         * @public
         * @readonly
         */
        readonly pINServerID: PINServerID,
        /**
         * @summary `pINAPPMessage`.
         * @public
         * @readonly
         */
        readonly pINAPPMessage: XMLType
    ) {}

    /**
     * @summary Restructures an object into a FiveGPINAPPMessage
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGPINAPPMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGPINAPPMessage`.
     * @returns {FiveGPINAPPMessage}
     */
    public static _from_object (_o: { [_K in keyof (FiveGPINAPPMessage)]: (FiveGPINAPPMessage)[_K] }): FiveGPINAPPMessage {
        return new FiveGPINAPPMessage(_o.pINEIdentities, _o.mACAddress, _o.pINID, _o.pINServerID, _o.pINAPPMessage);
    }


}

/**
 * @summary The Leading Root Component Types of FiveGPINAPPMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGPINAPPMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("pINEIdentities", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mACAddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pINID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pINServerID", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pINAPPMessage", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of FiveGPINAPPMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGPINAPPMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGPINAPPMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGPINAPPMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGPINAPPMessage: $.ASN1Decoder<FiveGPINAPPMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGPINAPPMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGPINAPPMessage (el: _Element): FiveGPINAPPMessage {
    if (!_cached_decoder_for_FiveGPINAPPMessage) { _cached_decoder_for_FiveGPINAPPMessage = function (el: _Element): FiveGPINAPPMessage {
    let pINEIdentities!: PINEIdentities;
    let mACAddress: OPTIONAL<MACAddress>;
    let pINID: OPTIONAL<PINID>;
    let pINServerID!: PINServerID;
    let pINAPPMessage!: XMLType;
    const callbacks: $.DecodingMap = {
        "pINEIdentities": (_el: _Element): void => { pINEIdentities = $._decode_implicit<PINEIdentities>(() => _decode_PINEIdentities)(_el); },
        "mACAddress": (_el: _Element): void => { mACAddress = $._decode_implicit<MACAddress>(() => _decode_MACAddress)(_el); },
        "pINID": (_el: _Element): void => { pINID = $._decode_implicit<PINID>(() => _decode_PINID)(_el); },
        "pINServerID": (_el: _Element): void => { pINServerID = $._decode_implicit<PINServerID>(() => _decode_PINServerID)(_el); },
        "pINAPPMessage": (_el: _Element): void => { pINAPPMessage = $._decode_implicit<XMLType>(() => _decode_XMLType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FiveGPINAPPMessage,
        _extension_additions_list_spec_for_FiveGPINAPPMessage,
        _root_component_type_list_2_spec_for_FiveGPINAPPMessage,
        undefined,
    );
    return new FiveGPINAPPMessage(
        pINEIdentities,
        mACAddress,
        pINID,
        pINServerID,
        pINAPPMessage
    );
}; }
    return _cached_decoder_for_FiveGPINAPPMessage(el);
}

let _cached_encoder_for_FiveGPINAPPMessage: $.ASN1Encoder<FiveGPINAPPMessage> | null = null;

/**
 * @summary Encodes a(n) FiveGPINAPPMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGPINAPPMessage, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGPINAPPMessage (value: FiveGPINAPPMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGPINAPPMessage) { _cached_encoder_for_FiveGPINAPPMessage = function (value: FiveGPINAPPMessage, elGetter: $.ASN1Encoder<FiveGPINAPPMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PINEIdentities, $.BER)(value.pINEIdentities, $.BER),
            /* IF_ABSENT  */ ((value.mACAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_MACAddress, $.BER)(value.mACAddress, $.BER)),
            /* IF_ABSENT  */ ((value.pINID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_PINID, $.BER)(value.pINID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_PINServerID, $.BER)(value.pINServerID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_XMLType, $.BER)(value.pINAPPMessage, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FiveGPINAPPMessage(value, elGetter);
}


/* eslint-enable */
