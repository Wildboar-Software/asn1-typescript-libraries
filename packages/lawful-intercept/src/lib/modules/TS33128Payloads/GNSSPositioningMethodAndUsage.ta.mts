/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PositioningMode, _decode_PositioningMode, _encode_PositioningMode, _enum_for_PositioningMode } from "../TS33128Payloads/PositioningMode.ta.mjs";
// export { PositioningMode, _enum_for_PositioningMode, PositioningMode_uEBased /* IMPORTED_LONG_ENUMERATION_ITEM */, uEBased /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMode_uEAssisted /* IMPORTED_LONG_ENUMERATION_ITEM */, uEAssisted /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMode_conventional /* IMPORTED_LONG_ENUMERATION_ITEM */, conventional /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PositioningMode, _encode_PositioningMode } from "../TS33128Payloads/PositioningMode.ta.mjs";
import { GNSSID, _decode_GNSSID, _encode_GNSSID, _enum_for_GNSSID } from "../TS33128Payloads/GNSSID.ta.mjs";
// export { GNSSID, _enum_for_GNSSID, GNSSID_gPS /* IMPORTED_LONG_ENUMERATION_ITEM */, gPS /* IMPORTED_SHORT_ENUMERATION_ITEM */, GNSSID_galileo /* IMPORTED_LONG_ENUMERATION_ITEM */, galileo /* IMPORTED_SHORT_ENUMERATION_ITEM */, GNSSID_sBAS /* IMPORTED_LONG_ENUMERATION_ITEM */, sBAS /* IMPORTED_SHORT_ENUMERATION_ITEM */, GNSSID_modernizedGPS /* IMPORTED_LONG_ENUMERATION_ITEM */, modernizedGPS /* IMPORTED_SHORT_ENUMERATION_ITEM */, GNSSID_qZSS /* IMPORTED_LONG_ENUMERATION_ITEM */, qZSS /* IMPORTED_SHORT_ENUMERATION_ITEM */, GNSSID_gLONASS /* IMPORTED_LONG_ENUMERATION_ITEM */, gLONASS /* IMPORTED_SHORT_ENUMERATION_ITEM */, GNSSID_bDS /* IMPORTED_LONG_ENUMERATION_ITEM */, bDS /* IMPORTED_SHORT_ENUMERATION_ITEM */, GNSSID_nAVIC /* IMPORTED_LONG_ENUMERATION_ITEM */, nAVIC /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_GNSSID, _encode_GNSSID } from "../TS33128Payloads/GNSSID.ta.mjs";
import { Usage, _decode_Usage, _encode_Usage, _enum_for_Usage } from "../TS33128Payloads/Usage.ta.mjs";
// export { Usage, _enum_for_Usage, Usage_unsuccess /* IMPORTED_LONG_ENUMERATION_ITEM */, unsuccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, Usage_successResultsNotUsed /* IMPORTED_LONG_ENUMERATION_ITEM */, successResultsNotUsed /* IMPORTED_SHORT_ENUMERATION_ITEM */, Usage_successResultsUsedToVerifyLocation /* IMPORTED_LONG_ENUMERATION_ITEM */, successResultsUsedToVerifyLocation /* IMPORTED_SHORT_ENUMERATION_ITEM */, Usage_successResultsUsedToGenerateLocation /* IMPORTED_LONG_ENUMERATION_ITEM */, successResultsUsedToGenerateLocation /* IMPORTED_SHORT_ENUMERATION_ITEM */, Usage_successMethodNotDetermined /* IMPORTED_LONG_ENUMERATION_ITEM */, successMethodNotDetermined /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Usage, _encode_Usage } from "../TS33128Payloads/Usage.ta.mjs";


/**
 * @summary GNSSPositioningMethodAndUsage
 * @description
 * 
 * The GNSSPositioningMethodAndUsage type is derived from the data present in
 * the GNSSPositioningMethodAndUsage type defined in TS 29.572 [24] clause
 * 6.1.6.2.16.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.42.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GNSSPositioningMethodAndUsage ::= SEQUENCE
 * {
 *     mode                                [1] PositioningMode,
 *     gNSS                                [2] GNSSID,
 *     usage                               [3] Usage
 * }
 * ```
 * 
 * @class
 */
export
class GNSSPositioningMethodAndUsage {
    /**
     * @summary `mode`.
     * @description
     *
     * Indicates the mode of the location measurement from the related
     * positioning method. Shall be encoded as described in TS 29.572 [24]
     * clause 6.1.6.3.7.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.42.
     *
     * @public
     * @readonly
     */
    readonly mode: PositioningMode;
    /**
     * @summary `gNSS`.
     * @description
     *
     * Indicates the related GNSS positioning method. Shall be encoded as
     * described in TS 29.572 [24] clause 6.1.6.3.8.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.42.
     *
     * @public
     * @readonly
     */
    readonly gNSS: GNSSID;
    /**
     * @summary `usage`.
     * @description
     *
     * Indicates the usage of the location measurement from the related
     * positioning method. Shall be encoded as described in TS 29.572 [24]
     * clause 6.1.6.3.9.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.42.
     *
     * @public
     * @readonly
     */
    readonly usage: Usage;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mode: PositioningMode,
        gNSS: GNSSID,
        usage: Usage,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mode = mode;
        this.gNSS = gNSS;
        this.usage = usage;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a GNSSPositioningMethodAndUsage
     * @description
     * 
     * This takes an `object` and converts it to a `GNSSPositioningMethodAndUsage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GNSSPositioningMethodAndUsage`.
     * @returns {GNSSPositioningMethodAndUsage}
     */
    public static _from_object (_o: { [_K in keyof (GNSSPositioningMethodAndUsage)]: (GNSSPositioningMethodAndUsage)[_K] }): GNSSPositioningMethodAndUsage {
        return new GNSSPositioningMethodAndUsage(_o.mode, _o.gNSS, _o.usage, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `mode`
         * @public
         * @static
         */

    public static _enum_for_mode: typeof _enum_for_PositioningMode = _enum_for_PositioningMode;        /**
         * @summary The enum used as the type of the component `gNSS`
         * @public
         * @static
         */

    public static _enum_for_gNSS: typeof _enum_for_GNSSID = _enum_for_GNSSID;        /**
         * @summary The enum used as the type of the component `usage`
         * @public
         * @static
         */

    public static _enum_for_usage: typeof _enum_for_Usage = _enum_for_Usage;
}

/**
 * @summary The Leading Root Component Types of GNSSPositioningMethodAndUsage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GNSSPositioningMethodAndUsage: $.ComponentSpec[] = [
    new $.ComponentSpec("mode", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gNSS", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("usage", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of GNSSPositioningMethodAndUsage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GNSSPositioningMethodAndUsage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GNSSPositioningMethodAndUsage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GNSSPositioningMethodAndUsage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GNSSPositioningMethodAndUsage: $.ASN1Decoder<GNSSPositioningMethodAndUsage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GNSSPositioningMethodAndUsage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GNSSPositioningMethodAndUsage (el: _Element): GNSSPositioningMethodAndUsage {
    if (!_cached_decoder_for_GNSSPositioningMethodAndUsage) { _cached_decoder_for_GNSSPositioningMethodAndUsage = function (el: _Element): GNSSPositioningMethodAndUsage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("GNSSPositioningMethodAndUsage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mode";
    sequence[1].name = "gNSS";
    sequence[2].name = "usage";
    let mode!: PositioningMode;
    let gNSS!: GNSSID;
    let usage!: Usage;
    mode = $._decode_implicit<PositioningMode>(() => _decode_PositioningMode)(sequence[0]);
    gNSS = $._decode_implicit<GNSSID>(() => _decode_GNSSID)(sequence[1]);
    usage = $._decode_implicit<Usage>(() => _decode_Usage)(sequence[2]);
    return new GNSSPositioningMethodAndUsage(
        mode,
        gNSS,
        usage,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_GNSSPositioningMethodAndUsage(el);
}

let _cached_encoder_for_GNSSPositioningMethodAndUsage: $.ASN1Encoder<GNSSPositioningMethodAndUsage> | null = null;

/**
 * @summary Encodes a(n) GNSSPositioningMethodAndUsage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GNSSPositioningMethodAndUsage, encoded as an ASN.1 Element.
 */
export
function _encode_GNSSPositioningMethodAndUsage (value: GNSSPositioningMethodAndUsage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GNSSPositioningMethodAndUsage) { _cached_encoder_for_GNSSPositioningMethodAndUsage = function (value: GNSSPositioningMethodAndUsage, elGetter: $.ASN1Encoder<GNSSPositioningMethodAndUsage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PositioningMode, $.BER)(value.mode, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_GNSSID, $.BER)(value.gNSS, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Usage, $.BER)(value.usage, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_GNSSPositioningMethodAndUsage(value, elGetter);
}


/* eslint-enable */
