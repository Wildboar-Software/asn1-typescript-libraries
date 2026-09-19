/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { FiveGProSeMessage, _decode_FiveGProSeMessage, _encode_FiveGProSeMessage } from "../TS33128Payloads/FiveGProSeMessage.ta.mjs";
// export { FiveGProSeMessage, _decode_FiveGProSeMessage, _encode_FiveGProSeMessage } from "../TS33128Payloads/FiveGProSeMessage.ta.mjs";


/**
 * @summary FiveGDDNMFProSeUNIDirectDiscovery
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGDDNMFProSeUNIDirectDiscovery ::= SEQUENCE
 * {
 *     sUPI              [1] SUPI,
 *     gPSI              [2] GPSI OPTIONAL,
 *     fiveGProSeMessage [3] FiveGProSeMessage
 * }
 * ```
 * 
 * @class
 */
export
class FiveGDDNMFProSeUNIDirectDiscovery {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: OPTIONAL<GPSI>,
        /**
         * @summary `fiveGProSeMessage`.
         * @public
         * @readonly
         */
        readonly fiveGProSeMessage: FiveGProSeMessage
    ) {}

    /**
     * @summary Restructures an object into a FiveGDDNMFProSeUNIDirectDiscovery
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGDDNMFProSeUNIDirectDiscovery`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGDDNMFProSeUNIDirectDiscovery`.
     * @returns {FiveGDDNMFProSeUNIDirectDiscovery}
     */
    public static _from_object (_o: { [_K in keyof (FiveGDDNMFProSeUNIDirectDiscovery)]: (FiveGDDNMFProSeUNIDirectDiscovery)[_K] }): FiveGDDNMFProSeUNIDirectDiscovery {
        return new FiveGDDNMFProSeUNIDirectDiscovery(_o.sUPI, _o.gPSI, _o.fiveGProSeMessage);
    }


}

/**
 * @summary The Leading Root Component Types of FiveGDDNMFProSeUNIDirectDiscovery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGDDNMFProSeUNIDirectDiscovery: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("fiveGProSeMessage", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of FiveGDDNMFProSeUNIDirectDiscovery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGDDNMFProSeUNIDirectDiscovery: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGDDNMFProSeUNIDirectDiscovery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGDDNMFProSeUNIDirectDiscovery: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGDDNMFProSeUNIDirectDiscovery: $.ASN1Decoder<FiveGDDNMFProSeUNIDirectDiscovery> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGDDNMFProSeUNIDirectDiscovery
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGDDNMFProSeUNIDirectDiscovery (el: _Element): FiveGDDNMFProSeUNIDirectDiscovery {
    if (!_cached_decoder_for_FiveGDDNMFProSeUNIDirectDiscovery) { _cached_decoder_for_FiveGDDNMFProSeUNIDirectDiscovery = function (el: _Element): FiveGDDNMFProSeUNIDirectDiscovery {
    let sUPI!: SUPI;
    let gPSI: OPTIONAL<GPSI>;
    let fiveGProSeMessage!: FiveGProSeMessage;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "fiveGProSeMessage": (_el: _Element): void => { fiveGProSeMessage = $._decode_explicit<FiveGProSeMessage>(() => _decode_FiveGProSeMessage)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FiveGDDNMFProSeUNIDirectDiscovery,
        _extension_additions_list_spec_for_FiveGDDNMFProSeUNIDirectDiscovery,
        _root_component_type_list_2_spec_for_FiveGDDNMFProSeUNIDirectDiscovery,
        undefined,
    );
    return new FiveGDDNMFProSeUNIDirectDiscovery(
        sUPI,
        gPSI,
        fiveGProSeMessage
    );
}; }
    return _cached_decoder_for_FiveGDDNMFProSeUNIDirectDiscovery(el);
}

let _cached_encoder_for_FiveGDDNMFProSeUNIDirectDiscovery: $.ASN1Encoder<FiveGDDNMFProSeUNIDirectDiscovery> | null = null;

/**
 * @summary Encodes a(n) FiveGDDNMFProSeUNIDirectDiscovery into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGDDNMFProSeUNIDirectDiscovery, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGDDNMFProSeUNIDirectDiscovery (value: FiveGDDNMFProSeUNIDirectDiscovery, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGDDNMFProSeUNIDirectDiscovery) { _cached_encoder_for_FiveGDDNMFProSeUNIDirectDiscovery = function (value: FiveGDDNMFProSeUNIDirectDiscovery, elGetter: $.ASN1Encoder<FiveGDDNMFProSeUNIDirectDiscovery>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_FiveGProSeMessage, $.BER)(value.fiveGProSeMessage, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FiveGDDNMFProSeUNIDirectDiscovery(value, elGetter);
}


/* eslint-enable */
