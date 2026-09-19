/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RANUES1APID, _decode_RANUES1APID, _encode_RANUES1APID } from "../TS33128Payloads/RANUES1APID.ta.mjs";
// export { RANUES1APID, _decode_RANUES1APID, _encode_RANUES1APID } from "../TS33128Payloads/RANUES1APID.ta.mjs";
import { BBFTunnelInformation, _decode_BBFTunnelInformation, _encode_BBFTunnelInformation } from "../TS33128Payloads/BBFTunnelInformation.ta.mjs";
// export { BBFTunnelInformation, _decode_BBFTunnelInformation, _encode_BBFTunnelInformation } from "../TS33128Payloads/BBFTunnelInformation.ta.mjs";
import { LTENTNTAIInformation, _decode_LTENTNTAIInformation, _encode_LTENTNTAIInformation } from "../TS33128Payloads/LTENTNTAIInformation.ta.mjs";
// export { LTENTNTAIInformation, _decode_LTENTNTAIInformation, _encode_LTENTNTAIInformation } from "../TS33128Payloads/LTENTNTAIInformation.ta.mjs";


/**
 * @summary EPSNASTransportInitialInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSNASTransportInitialInformation ::= SEQUENCE
 * {
 *     rANUES1APID             [1] RANUES1APID,
 *     relayNodeIndicator      [2] BOOLEAN OPTIONAL,
 *     bBFTunnelInformation    [3] BBFTunnelInformation OPTIONAL,
 *     eDTSession              [4] BOOLEAN OPTIONAL,
 *     iABNodeIndication       [5] BOOLEAN OPTIONAL,
 *     lTENTNTAIInformation    [6] LTENTNTAIInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EPSNASTransportInitialInformation {
    constructor (
        /**
         * @summary `rANUES1APID`.
         * @public
         * @readonly
         */
        readonly rANUES1APID: RANUES1APID,
        /**
         * @summary `relayNodeIndicator`.
         * @public
         * @readonly
         */
        readonly relayNodeIndicator: OPTIONAL<BOOLEAN>,
        /**
         * @summary `bBFTunnelInformation`.
         * @public
         * @readonly
         */
        readonly bBFTunnelInformation: OPTIONAL<BBFTunnelInformation>,
        /**
         * @summary `eDTSession`.
         * @public
         * @readonly
         */
        readonly eDTSession: OPTIONAL<BOOLEAN>,
        /**
         * @summary `iABNodeIndication`.
         * @public
         * @readonly
         */
        readonly iABNodeIndication: OPTIONAL<BOOLEAN>,
        /**
         * @summary `lTENTNTAIInformation`.
         * @public
         * @readonly
         */
        readonly lTENTNTAIInformation: OPTIONAL<LTENTNTAIInformation>
    ) {}

    /**
     * @summary Restructures an object into a EPSNASTransportInitialInformation
     * @description
     * 
     * This takes an `object` and converts it to a `EPSNASTransportInitialInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSNASTransportInitialInformation`.
     * @returns {EPSNASTransportInitialInformation}
     */
    public static _from_object (_o: { [_K in keyof (EPSNASTransportInitialInformation)]: (EPSNASTransportInitialInformation)[_K] }): EPSNASTransportInitialInformation {
        return new EPSNASTransportInitialInformation(_o.rANUES1APID, _o.relayNodeIndicator, _o.bBFTunnelInformation, _o.eDTSession, _o.iABNodeIndication, _o.lTENTNTAIInformation);
    }


}

/**
 * @summary The Leading Root Component Types of EPSNASTransportInitialInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSNASTransportInitialInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("rANUES1APID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("relayNodeIndicator", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("bBFTunnelInformation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("eDTSession", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("iABNodeIndication", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("lTENTNTAIInformation", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of EPSNASTransportInitialInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSNASTransportInitialInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSNASTransportInitialInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSNASTransportInitialInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSNASTransportInitialInformation: $.ASN1Decoder<EPSNASTransportInitialInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSNASTransportInitialInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSNASTransportInitialInformation (el: _Element): EPSNASTransportInitialInformation {
    if (!_cached_decoder_for_EPSNASTransportInitialInformation) { _cached_decoder_for_EPSNASTransportInitialInformation = function (el: _Element): EPSNASTransportInitialInformation {
    let rANUES1APID!: RANUES1APID;
    let relayNodeIndicator: OPTIONAL<BOOLEAN>;
    let bBFTunnelInformation: OPTIONAL<BBFTunnelInformation>;
    let eDTSession: OPTIONAL<BOOLEAN>;
    let iABNodeIndication: OPTIONAL<BOOLEAN>;
    let lTENTNTAIInformation: OPTIONAL<LTENTNTAIInformation>;
    const callbacks: $.DecodingMap = {
        "rANUES1APID": (_el: _Element): void => { rANUES1APID = $._decode_implicit<RANUES1APID>(() => _decode_RANUES1APID)(_el); },
        "relayNodeIndicator": (_el: _Element): void => { relayNodeIndicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "bBFTunnelInformation": (_el: _Element): void => { bBFTunnelInformation = $._decode_implicit<BBFTunnelInformation>(() => _decode_BBFTunnelInformation)(_el); },
        "eDTSession": (_el: _Element): void => { eDTSession = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "iABNodeIndication": (_el: _Element): void => { iABNodeIndication = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "lTENTNTAIInformation": (_el: _Element): void => { lTENTNTAIInformation = $._decode_implicit<LTENTNTAIInformation>(() => _decode_LTENTNTAIInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSNASTransportInitialInformation,
        _extension_additions_list_spec_for_EPSNASTransportInitialInformation,
        _root_component_type_list_2_spec_for_EPSNASTransportInitialInformation,
        undefined,
    );
    return new EPSNASTransportInitialInformation(
        rANUES1APID,
        relayNodeIndicator,
        bBFTunnelInformation,
        eDTSession,
        iABNodeIndication,
        lTENTNTAIInformation
    );
}; }
    return _cached_decoder_for_EPSNASTransportInitialInformation(el);
}

let _cached_encoder_for_EPSNASTransportInitialInformation: $.ASN1Encoder<EPSNASTransportInitialInformation> | null = null;

/**
 * @summary Encodes a(n) EPSNASTransportInitialInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSNASTransportInitialInformation, encoded as an ASN.1 Element.
 */
export
function _encode_EPSNASTransportInitialInformation (value: EPSNASTransportInitialInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSNASTransportInitialInformation) { _cached_encoder_for_EPSNASTransportInitialInformation = function (value: EPSNASTransportInitialInformation, elGetter: $.ASN1Encoder<EPSNASTransportInitialInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_RANUES1APID, $.BER)(value.rANUES1APID, $.BER),
            /* IF_ABSENT  */ ((value.relayNodeIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.relayNodeIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.bBFTunnelInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_BBFTunnelInformation, $.BER)(value.bBFTunnelInformation, $.BER)),
            /* IF_ABSENT  */ ((value.eDTSession === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.eDTSession, $.BER)),
            /* IF_ABSENT  */ ((value.iABNodeIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.iABNodeIndication, $.BER)),
            /* IF_ABSENT  */ ((value.lTENTNTAIInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_LTENTNTAIInformation, $.BER)(value.lTENTNTAIInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPSNASTransportInitialInformation(value, elGetter);
}


/* eslint-enable */
