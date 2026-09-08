/* eslint-disable */
import {
    OPTIONAL,
    OCTET_STRING,
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
import { IGCS_Address, _decode_IGCS_Address, _encode_IGCS_Address } from "../SCPP-MESSAGES/IGCS-Address.ta.mjs";
import { SCPP_PDU_igcs_message_body, _decode_SCPP_PDU_igcs_message_body, _encode_SCPP_PDU_igcs_message_body } from "../SCPP-MESSAGES/SCPP-PDU-igcs-message-body.ta.mjs";


/**
 * @summary SCPP_PDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCPP-PDU ::= SEQUENCE {
 *   sourceAddress      IGCS-Address,
 *   destAddress        IGCS-Address,
 *   igcs-message-body
 *     CHOICE {peerDiscovery  PeerDiscoveryDEF,
 *             peerSetup      PeerSetupDEF,
 *             dataExchange   DataExchangeDEF,
 *             peerKeepAlive  PeerKeepAliveDEF,
 *             peerRelease    PeerReleaseDEF},
 *   nonStandardData    OCTET STRING OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class SCPP_PDU {
    constructor (
        /**
         * @summary `sourceAddress`.
         * @public
         * @readonly
         */
        readonly sourceAddress: IGCS_Address,
        /**
         * @summary `destAddress`.
         * @public
         * @readonly
         */
        readonly destAddress: IGCS_Address,
        /**
         * @summary `igcs_message_body`.
         * @public
         * @readonly
         */
        readonly igcs_message_body: SCPP_PDU_igcs_message_body,
        /**
         * @summary `nonStandardData`.
         * @public
         * @readonly
         */
        readonly nonStandardData: OPTIONAL<OCTET_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SCPP_PDU
     * @description
     * 
     * This takes an `object` and converts it to a `SCPP_PDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCPP_PDU`.
     * @returns {SCPP_PDU}
     */
    public static _from_object (_o: { [_K in keyof (SCPP_PDU)]: (SCPP_PDU)[_K] }): SCPP_PDU {
        return new SCPP_PDU(_o.sourceAddress, _o.destAddress, _o.igcs_message_body, _o.nonStandardData, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SCPP_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCPP_PDU: $.ComponentSpec[] = [
    new $.ComponentSpec("sourceAddress", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("destAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("igcs-message-body", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nonStandardData", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of SCPP_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCPP_PDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCPP_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCPP_PDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCPP_PDU: $.ASN1Decoder<SCPP_PDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCPP_PDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCPP_PDU (el: _Element): SCPP_PDU {
    if (!_cached_decoder_for_SCPP_PDU) { _cached_decoder_for_SCPP_PDU = function (el: _Element): SCPP_PDU {
    let sourceAddress!: IGCS_Address;
    let destAddress!: IGCS_Address;
    let igcs_message_body!: SCPP_PDU_igcs_message_body;
    let nonStandardData: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sourceAddress": (_el: _Element): void => { sourceAddress = $._decode_explicit<IGCS_Address>(() => _decode_IGCS_Address)(_el); },
        "destAddress": (_el: _Element): void => { destAddress = $._decode_explicit<IGCS_Address>(() => _decode_IGCS_Address)(_el); },
        "igcs-message-body": (_el: _Element): void => { igcs_message_body = $._decode_explicit<SCPP_PDU_igcs_message_body>(() => _decode_SCPP_PDU_igcs_message_body)(_el); },
        "nonStandardData": (_el: _Element): void => { nonStandardData = $._decodeOctetString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SCPP_PDU,
        _extension_additions_list_spec_for_SCPP_PDU,
        _root_component_type_list_2_spec_for_SCPP_PDU,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SCPP_PDU(
        sourceAddress,
        destAddress,
        igcs_message_body,
        nonStandardData,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SCPP_PDU(el);
}

let _cached_encoder_for_SCPP_PDU: $.ASN1Encoder<SCPP_PDU> | null = null;

/**
 * @summary Encodes a(n) SCPP_PDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCPP_PDU, encoded as an ASN.1 Element.
 */
export
function _encode_SCPP_PDU (value: SCPP_PDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCPP_PDU) { _cached_encoder_for_SCPP_PDU = function (value: SCPP_PDU): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_IGCS_Address, $.BER)(value.sourceAddress, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IGCS_Address, $.BER)(value.destAddress, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_SCPP_PDU_igcs_message_body, $.BER)(value.igcs_message_body, $.BER),
            /* IF_ABSENT  */ ((value.nonStandardData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.nonStandardData, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SCPP_PDU(value, elGetter);
}


/* eslint-enable */
