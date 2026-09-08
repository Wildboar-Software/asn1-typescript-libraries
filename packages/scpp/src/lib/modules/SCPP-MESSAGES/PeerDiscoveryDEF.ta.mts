/* eslint-disable */
import {
    BOOLEAN,
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
import { IGCS_Signature, _decode_IGCS_Signature, _encode_IGCS_Signature } from "../SCPP-MESSAGES/IGCS-Signature.ta.mjs";


/**
 * @summary PeerDiscoveryDEF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeerDiscoveryDEF ::= SEQUENCE {
 *   setupRequest   BOOLEAN,
 *   igcsSignature  IGCS-Signature
 * }
 * ```
 * 
 * @class
 */
export
class PeerDiscoveryDEF {
    constructor (
        /**
         * @summary `setupRequest`.
         * @public
         * @readonly
         */
        readonly setupRequest: BOOLEAN,
        /**
         * @summary `igcsSignature`.
         * @public
         * @readonly
         */
        readonly igcsSignature: IGCS_Signature
    ) {}

    /**
     * @summary Restructures an object into a PeerDiscoveryDEF
     * @description
     * 
     * This takes an `object` and converts it to a `PeerDiscoveryDEF`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PeerDiscoveryDEF`.
     * @returns {PeerDiscoveryDEF}
     */
    public static _from_object (_o: { [_K in keyof (PeerDiscoveryDEF)]: (PeerDiscoveryDEF)[_K] }): PeerDiscoveryDEF {
        return new PeerDiscoveryDEF(_o.setupRequest, _o.igcsSignature);
    }


}

/**
 * @summary The Leading Root Component Types of PeerDiscoveryDEF
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PeerDiscoveryDEF: $.ComponentSpec[] = [
    new $.ComponentSpec("setupRequest", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("igcsSignature", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of PeerDiscoveryDEF
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PeerDiscoveryDEF: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PeerDiscoveryDEF
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PeerDiscoveryDEF: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PeerDiscoveryDEF: $.ASN1Decoder<PeerDiscoveryDEF> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PeerDiscoveryDEF
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PeerDiscoveryDEF (el: _Element): PeerDiscoveryDEF {
    if (!_cached_decoder_for_PeerDiscoveryDEF) { _cached_decoder_for_PeerDiscoveryDEF = function (el: _Element): PeerDiscoveryDEF {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PeerDiscoveryDEF contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "setupRequest";
    sequence[1].name = "igcsSignature";
    const setupRequest = $._decodeBoolean(sequence[0]);
    const igcsSignature = _decode_IGCS_Signature(sequence[1]);
    return new PeerDiscoveryDEF(
        setupRequest,
        igcsSignature,

    );
}; }
    return _cached_decoder_for_PeerDiscoveryDEF(el);
}

let _cached_encoder_for_PeerDiscoveryDEF: $.ASN1Encoder<PeerDiscoveryDEF> | null = null;

/**
 * @summary Encodes a(n) PeerDiscoveryDEF into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PeerDiscoveryDEF, encoded as an ASN.1 Element.
 */
export
function _encode_PeerDiscoveryDEF (value: PeerDiscoveryDEF, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PeerDiscoveryDEF) { _cached_encoder_for_PeerDiscoveryDEF = function (value: PeerDiscoveryDEF): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeBoolean(value.setupRequest, $.BER),
            /* REQUIRED   */ _encode_IGCS_Signature(value.igcsSignature, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PeerDiscoveryDEF(value, elGetter);
}


/* eslint-enable */
