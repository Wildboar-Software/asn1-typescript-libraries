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
 * The IRI-POI in the 5G DDNMF in the HPLMN shall generate an xIRI containing a
 * FiveGUDDNMFProSeUNIDirectDiscovery record when the IRI-POI present in the 5G
 * DDNMF in the HPLMN detects that the 5G DDNMF in the HPLMN returns a response
 * to a direct discovery request received from a target UE. The IRI-POI present
 * in the 5G DDNMF in the HPLMN shall generate the xIRI for the following
 * events:
 *
 * - 5G DDNMF in HPLMN exchanges direct discovery messages over PC3a with the
 *   target UE to authorize the target UE for discovery services (see TS 24.554
 *   [140] clauses 6.2.2. to 6.2.12).
 *
 * - 5G DDNMF in HPLMN receives a PROSE_USAGE_INFORMATION_REPORT_LIST message
 *   from a target UE providing a set of usage information reports indicating
 *   the amount of data transmitted and received during 5G ProSe direct
 *   communication (see TS 24.554 [140] clause 7.6.2.1).
 *
 * NOTE: Either FiveGProSeDiscoveryMessage or
 * FiveGProSeUsageInformationReportMessage field shall be present.
 *
 * 3GPP TS 33.128, clause 7.17.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
    /**
     * @summary `sUPI`.
     * @description
     *
     * Identifies the SUPI of the target UE.
     *
     * 3GPP TS 33.128, clause 7.17.2.2.
     *
     * @public
     * @readonly
     */
    readonly sUPI: SUPI;
    /**
     * @summary `gPSI`.
     * @description
     *
     * Identifies the GPSI of the target UE.
     *
     * 3GPP TS 33.128, clause 7.17.2.2.
     *
     * @public
     * @readonly
     */
    readonly gPSI: OPTIONAL<GPSI>;
    /**
     * @summary `fiveGProSeMessage`.
     * @public
     * @readonly
     */
    readonly fiveGProSeMessage: FiveGProSeMessage;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sUPI: SUPI,
        gPSI: OPTIONAL<GPSI>,
        fiveGProSeMessage: FiveGProSeMessage,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sUPI = sUPI;
        this.gPSI = gPSI;
        this.fiveGProSeMessage = fiveGProSeMessage;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new FiveGDDNMFProSeUNIDirectDiscovery(_o.sUPI, _o.gPSI, _o.fiveGProSeMessage, _o._unrecognizedExtensionsList);
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
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "fiveGProSeMessage": (_el: _Element): void => { fiveGProSeMessage = $._decode_explicit<FiveGProSeMessage>(() => _decode_FiveGProSeMessage)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FiveGDDNMFProSeUNIDirectDiscovery,
        _extension_additions_list_spec_for_FiveGDDNMFProSeUNIDirectDiscovery,
        _root_component_type_list_2_spec_for_FiveGDDNMFProSeUNIDirectDiscovery,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new FiveGDDNMFProSeUNIDirectDiscovery(
        sUPI,
        gPSI,
        fiveGProSeMessage,
        _unrecognizedExtensionsList
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER);
    if (value.gPSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_FiveGProSeMessage, $.BER)(value.fiveGProSeMessage, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FiveGDDNMFProSeUNIDirectDiscovery(value, elGetter);
}


/* eslint-enable */
