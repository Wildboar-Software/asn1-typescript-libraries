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
import { IGCS_Address, _decode_IGCS_Address, _encode_IGCS_Address } from "../SCPP-MESSAGES/IGCS-Address.ta.mjs";
import { SupportedSpamFilters, _decode_SupportedSpamFilters, _encode_SupportedSpamFilters } from "../SCPP-MESSAGES/SupportedSpamFilters.ta.mjs";
import { IGCS_Signature, _decode_IGCS_Signature, _encode_IGCS_Signature } from "../SCPP-MESSAGES/IGCS-Signature.ta.mjs";


/**
 * @summary PeerSetupDEF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeerSetupDEF ::= SEQUENCE {
 *   setupResponse     BOOLEAN,
 *   sgfList           SEQUENCE OF IGCS-Address,
 *   rgfList           SEQUENCE OF IGCS-Address,
 *   supportedFilters  SupportedSpamFilters,
 *   igcsSignature     IGCS-Signature
 * }
 * ```
 * 
 * @class
 */
export
class PeerSetupDEF {
    constructor (
        /**
         * @summary `setupResponse`.
         * @public
         * @readonly
         */
        readonly setupResponse: BOOLEAN,
        /**
         * @summary `sgfList`.
         * @public
         * @readonly
         */
        readonly sgfList: IGCS_Address[],
        /**
         * @summary `rgfList`.
         * @public
         * @readonly
         */
        readonly rgfList: IGCS_Address[],
        /**
         * @summary `supportedFilters`.
         * @public
         * @readonly
         */
        readonly supportedFilters: SupportedSpamFilters,
        /**
         * @summary `igcsSignature`.
         * @public
         * @readonly
         */
        readonly igcsSignature: IGCS_Signature
    ) {}

    /**
     * @summary Restructures an object into a PeerSetupDEF
     * @description
     * 
     * This takes an `object` and converts it to a `PeerSetupDEF`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PeerSetupDEF`.
     * @returns {PeerSetupDEF}
     */
    public static _from_object (_o: { [_K in keyof (PeerSetupDEF)]: (PeerSetupDEF)[_K] }): PeerSetupDEF {
        return new PeerSetupDEF(_o.setupResponse, _o.sgfList, _o.rgfList, _o.supportedFilters, _o.igcsSignature);
    }


}

/**
 * @summary The Leading Root Component Types of PeerSetupDEF
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PeerSetupDEF: $.ComponentSpec[] = [
    new $.ComponentSpec("setupResponse", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sgfList", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rgfList", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("supportedFilters", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("igcsSignature", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of PeerSetupDEF
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PeerSetupDEF: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PeerSetupDEF
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PeerSetupDEF: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PeerSetupDEF: $.ASN1Decoder<PeerSetupDEF> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PeerSetupDEF
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PeerSetupDEF (el: _Element): PeerSetupDEF {
    if (!_cached_decoder_for_PeerSetupDEF) { _cached_decoder_for_PeerSetupDEF = function (el: _Element): PeerSetupDEF {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("PeerSetupDEF contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "setupResponse";
    sequence[1].name = "sgfList";
    sequence[2].name = "rgfList";
    sequence[3].name = "supportedFilters";
    sequence[4].name = "igcsSignature";
    const setupResponse = $._decodeBoolean(sequence[0]);
    const sgfList = $._decodeSequenceOf<IGCS_Address>(() => _decode_IGCS_Address)(sequence[1]);
    const rgfList = $._decodeSequenceOf<IGCS_Address>(() => _decode_IGCS_Address)(sequence[2]);
    const supportedFilters = _decode_SupportedSpamFilters(sequence[3]);
    const igcsSignature = _decode_IGCS_Signature(sequence[4]);
    return new PeerSetupDEF(
        setupResponse,
        sgfList,
        rgfList,
        supportedFilters,
        igcsSignature,

    );
}; }
    return _cached_decoder_for_PeerSetupDEF(el);
}

let _cached_encoder_for_PeerSetupDEF: $.ASN1Encoder<PeerSetupDEF> | null = null;

/**
 * @summary Encodes a(n) PeerSetupDEF into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PeerSetupDEF, encoded as an ASN.1 Element.
 */
export
function _encode_PeerSetupDEF (value: PeerSetupDEF, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PeerSetupDEF) { _cached_encoder_for_PeerSetupDEF = function (value: PeerSetupDEF): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeBoolean(value.setupResponse, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<IGCS_Address>(() => _encode_IGCS_Address, $.BER)(value.sgfList, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<IGCS_Address>(() => _encode_IGCS_Address, $.BER)(value.rgfList, $.BER),
            /* REQUIRED   */ _encode_SupportedSpamFilters(value.supportedFilters, $.BER),
            /* REQUIRED   */ _encode_IGCS_Signature(value.igcsSignature, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PeerSetupDEF(value, elGetter);
}


/* eslint-enable */
