/* eslint-disable */
import {
    OPTIONAL,
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
import { USIServiceIndicator, _decode_USIServiceIndicator, _encode_USIServiceIndicator } from "../IN-CS2-datatypes/USIServiceIndicator.ta.mjs";
// export { USIServiceIndicator, _decode_USIServiceIndicator, _encode_USIServiceIndicator } from "../IN-CS2-datatypes/USIServiceIndicator.ta.mjs";
import { USIMonitorMode, _enum_for_USIMonitorMode, _decode_USIMonitorMode, _encode_USIMonitorMode } from "../IN-CS2-datatypes/USIMonitorMode.ta.mjs";
// export { USIMonitorMode, _enum_for_USIMonitorMode, USIMonitorMode_monitoringActive /* IMPORTED_LONG_ENUMERATION_ITEM */, monitoringActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, USIMonitorMode_monitoringInactive /* IMPORTED_LONG_ENUMERATION_ITEM */, monitoringInactive /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_USIMonitorMode, _encode_USIMonitorMode } from "../IN-CS2-datatypes/USIMonitorMode.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-CS2-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS2-datatypes/LegID.ta.mjs";
import { leg1 } from "../IN-CS2-datatypes/leg1.va.mjs";
// export { leg1 } from "../IN-CS2-datatypes/leg1.va.mjs";


/**
 * @summary RequestedUTSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedUTSI{PARAMETERS-BOUND:bound} ::= SEQUENCE {
 *   uSIServiceIndicator  [0]  USIServiceIndicator{bound},
 *   uSImonitorMode       [1]  USIMonitorMode,
 *   legID                [2]  LegID DEFAULT sendingSideID:leg1
 * }
 * ```
 * 
 * @class
 */
export
class RequestedUTSI {
    constructor (
        /**
         * @summary `uSIServiceIndicator`.
         * @public
         * @readonly
         */
        readonly uSIServiceIndicator: USIServiceIndicator,
        /**
         * @summary `uSImonitorMode`.
         * @public
         * @readonly
         */
        readonly uSImonitorMode: USIMonitorMode,
        /**
         * @summary `legID`.
         * @public
         * @readonly
         */
        readonly legID: OPTIONAL<LegID>
    ) {}

    /**
     * @summary Restructures an object into a RequestedUTSI
     * @description
     * 
     * This takes an `object` and converts it to a `RequestedUTSI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestedUTSI`.
     * @returns {RequestedUTSI}
     */
    public static _from_object (_o: { [_K in keyof (RequestedUTSI)]: (RequestedUTSI)[_K] }): RequestedUTSI {
        return new RequestedUTSI(_o.uSIServiceIndicator, _o.uSImonitorMode, _o.legID);
    }

    /**
     * @summary Getter that returns the default value for `legID`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_legID () { return { sendingSideID: leg1 }; }        /**
         * @summary The enum used as the type of the component `uSImonitorMode`
         * @public
         * @static
         */

    public static _enum_for_uSImonitorMode = _enum_for_USIMonitorMode;
}

/**
 * @summary The Leading Root Component Types of RequestedUTSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestedUTSI: $.ComponentSpec[] = [
    new $.ComponentSpec("uSIServiceIndicator", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("uSImonitorMode", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RequestedUTSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestedUTSI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestedUTSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestedUTSI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestedUTSI: $.ASN1Decoder<RequestedUTSI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedUTSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedUTSI (el: _Element): RequestedUTSI {
    if (!_cached_decoder_for_RequestedUTSI) { _cached_decoder_for_RequestedUTSI = function (el: _Element): RequestedUTSI {
    let uSIServiceIndicator!: USIServiceIndicator;
    let uSImonitorMode!: USIMonitorMode;
    let legID: OPTIONAL<LegID> = RequestedUTSI._default_value_for_legID;
    const callbacks: $.DecodingMap = {
        "uSIServiceIndicator": (_el: _Element): void => { uSIServiceIndicator = $._decode_implicit<USIServiceIndicator>(() => _decode_USIServiceIndicator)(_el); },
        "uSImonitorMode": (_el: _Element): void => { uSImonitorMode = $._decode_implicit<USIMonitorMode>(() => _decode_USIMonitorMode)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestedUTSI,
        _extension_additions_list_spec_for_RequestedUTSI,
        _root_component_type_list_2_spec_for_RequestedUTSI,
        undefined,
    );
    return new RequestedUTSI(
        uSIServiceIndicator,
        uSImonitorMode,
        legID
    );
}; }
    return _cached_decoder_for_RequestedUTSI(el);
}

let _cached_encoder_for_RequestedUTSI: $.ASN1Encoder<RequestedUTSI> | null = null;

/**
 * @summary Encodes a(n) RequestedUTSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedUTSI, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedUTSI (value: RequestedUTSI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedUTSI) { _cached_encoder_for_RequestedUTSI = function (value: RequestedUTSI): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_USIServiceIndicator, $.BER)(value.uSIServiceIndicator, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_USIMonitorMode, $.BER)(value.uSImonitorMode, $.BER),
            /* IF_DEFAULT */ (value.legID === undefined || $.deepEq(value.legID, RequestedUTSI._default_value_for_legID) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_LegID, $.BER)(value.legID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RequestedUTSI(value, elGetter);
}


/* eslint-enable */
