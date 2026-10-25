/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
import { NAOperationType, _decode_NAOperationType, _encode_NAOperationType, _enum_for_NAOperationType } from "../TS33128Payloads/NAOperationType.ta.mjs";
// export { NAOperationType, _enum_for_NAOperationType, NAOperationType_createNetworkAssistanceSession /* IMPORTED_LONG_ENUMERATION_ITEM */, createNetworkAssistanceSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, NAOperationType_retrieveNetworkAssistanceSession /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieveNetworkAssistanceSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, NAOperationType_updateNetworkAssistanceSession /* IMPORTED_LONG_ENUMERATION_ITEM */, updateNetworkAssistanceSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, NAOperationType_patchNetworkAssistanceSession /* IMPORTED_LONG_ENUMERATION_ITEM */, patchNetworkAssistanceSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, NAOperationType_destroyNetworkAssistanceSession /* IMPORTED_LONG_ENUMERATION_ITEM */, destroyNetworkAssistanceSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, NAOperationType_requestBitRateRecommendation /* IMPORTED_LONG_ENUMERATION_ITEM */, requestBitRateRecommendation /* IMPORTED_SHORT_ENUMERATION_ITEM */, NAOperationType_requestDeliveryBoost /* IMPORTED_LONG_ENUMERATION_ITEM */, requestDeliveryBoost /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NAOperationType, _encode_NAOperationType } from "../TS33128Payloads/NAOperationType.ta.mjs";


/**
 * @summary FiveGMSAFNetworkAssistance
 * @description
 * 
 * The IRI-POI in the 5GMS AF shall generate an xIRI containing an
 * FiveGMSAFNetworkAssistance record when the IRI-POI present in the 5GMS AF
 * detects that an 5GMS AF has received a network assistance from the target UE.
 * The IRI-POI present in the 5GMS AF shall generate the xIRI for the following
 * events (as specified in TS 26.512 [98] clause 11.6):
 *
 * - 5GMS AF returns a createNetworkAssistanceSession Response (i.e. 201
 *   Created) in response to a createNetworkAssistanceSession Request (i.e.
 *   POST) from the Media Session Handler in the target UE which creates a
 *   network assistance session resource.
 *
 * - 5GMS AF returns a retrieveNetworkAssistanceSession Response (i.e. 200 OK)
 *   in response to a retrieveNetworkAssistanceSession Request (i.e. GET) from
 *   the Media Session Handler in the target UE which retrieves an existing
 *   network assistance session resource.
 *
 * - 5GMS AF returns an updateNetworkAssistanceSession Response (i.e. 200 OK or
 *   204 No Content) in response to an updateNetworkAssistanceSession Request
 *   (i.e. PUT) from the Media Session Handler in the target UE which replaces
 *   an existing network assistance session resource.
 *
 * - 5GMS AF returns a patchNetworkAssistanceSession Response (i.e. 200 OK or
 *   204 No Content) in response to a patchNetworkAssistanceSession Request
 *   (i.e. PATCH) from the Media Session Handler in the target UE which modifies
 *   the network assistance session resource.
 *
 * - 5GMS AF returns a destroyNetworkAssistanceSession Response (i.e. 204 No
 *   Content) in response to a destroyNetworkAssistanceSession Request (i.e.
 *   DELETE) from the Media Session Handler in the target UE which deletes the
 *   network assistance session resource.
 *
 * - 5GMS AF returns a requestBitRateRecommendation Response (i.e. 200 OK) in
 *   response to a requestBitRateRecommendation Request (i.e. GET) from the
 *   Media Session Handler in the target UE which requests a bit rate
 *   recommendation for the next recommendation window.
 *
 * - 5GMS AF returns a requestDeliveryBoost Response (i.e. 200 OK) in response
 *   to a requestDeliveryBoost Request (i.e. POST) from the Media Session
 *   Handler in the target UE which requests a delivery boost.
 *
 * Table 7.15.3-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.15.2.6.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMSAFNetworkAssistance ::= SEQUENCE
 * {
 *     gPSI                                [1] GPSI,
 *     networkAssistanceSessionResource    [2] SBIType,
 *     nAOperationType                     [3] NAOperationType
 * }
 * ```
 * 
 * @class
 */
export
class FiveGMSAFNetworkAssistance {
    /**
     * @summary `gPSI`.
     * @description
     *
     * GPSI of the target UE.
     *
     * 3GPP TS 33.128, clause 7.15.2.6.
     *
     * @public
     * @readonly
     */
    readonly gPSI: GPSI;
    /**
     * @summary `networkAssistanceSessionResource`.
     * @description
     *
     * Includes a network assistance session resource according to 26.512 [98]
     * clause 11.6.3. The SBIReference for this parameter shall be populated
     * with 'TS26512_M5_ NetworkAssistance.yaml#/components/schemas/
     * NetworkAssistanceSession'.
     *
     * 3GPP TS 33.128, clause 7.15.2.6.
     *
     * @public
     * @readonly
     */
    readonly networkAssistanceSessionResource: SBIType;
    /**
     * @summary `nAOperationType`.
     * @description
     *
     * Type of operation applied to the network assistance resource, i.e.
     * createNetworkAssistanceSession, retrieveNetworkAssistanceSession,
     * updateNetworkAssistanceSession, patchNetworkAssistanceSession,
     * destroyNetworkAssistanceSession, requestBitRateRecommendation and
     * requestDeliveryBoost.
     *
     * 3GPP TS 33.128, clause 7.15.2.6.
     *
     * @public
     * @readonly
     */
    readonly nAOperationType: NAOperationType;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        gPSI: GPSI,
        networkAssistanceSessionResource: SBIType,
        nAOperationType: NAOperationType,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.gPSI = gPSI;
        this.networkAssistanceSessionResource = networkAssistanceSessionResource;
        this.nAOperationType = nAOperationType;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a FiveGMSAFNetworkAssistance
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGMSAFNetworkAssistance`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGMSAFNetworkAssistance`.
     * @returns {FiveGMSAFNetworkAssistance}
     */
    public static _from_object (_o: { [_K in keyof (FiveGMSAFNetworkAssistance)]: (FiveGMSAFNetworkAssistance)[_K] }): FiveGMSAFNetworkAssistance {
        return new FiveGMSAFNetworkAssistance(_o.gPSI, _o.networkAssistanceSessionResource, _o.nAOperationType, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `nAOperationType`
         * @public
         * @static
         */

    public static _enum_for_nAOperationType = _enum_for_NAOperationType;
}

/**
 * @summary The Leading Root Component Types of FiveGMSAFNetworkAssistance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGMSAFNetworkAssistance: $.ComponentSpec[] = [
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("networkAssistanceSessionResource", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nAOperationType", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of FiveGMSAFNetworkAssistance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGMSAFNetworkAssistance: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGMSAFNetworkAssistance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGMSAFNetworkAssistance: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGMSAFNetworkAssistance: $.ASN1Decoder<FiveGMSAFNetworkAssistance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGMSAFNetworkAssistance
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGMSAFNetworkAssistance (el: _Element): FiveGMSAFNetworkAssistance {
    if (!_cached_decoder_for_FiveGMSAFNetworkAssistance) { _cached_decoder_for_FiveGMSAFNetworkAssistance = function (el: _Element): FiveGMSAFNetworkAssistance {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("FiveGMSAFNetworkAssistance contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "gPSI";
    sequence[1].name = "networkAssistanceSessionResource";
    sequence[2].name = "nAOperationType";
    let gPSI!: GPSI;
    let networkAssistanceSessionResource!: SBIType;
    let nAOperationType!: NAOperationType;
    gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(sequence[0]);
    networkAssistanceSessionResource = $._decode_implicit<SBIType>(() => _decode_SBIType)(sequence[1]);
    nAOperationType = $._decode_implicit<NAOperationType>(() => _decode_NAOperationType)(sequence[2]);
    return new FiveGMSAFNetworkAssistance(
        gPSI,
        networkAssistanceSessionResource,
        nAOperationType,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_FiveGMSAFNetworkAssistance(el);
}

let _cached_encoder_for_FiveGMSAFNetworkAssistance: $.ASN1Encoder<FiveGMSAFNetworkAssistance> | null = null;

/**
 * @summary Encodes a(n) FiveGMSAFNetworkAssistance into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGMSAFNetworkAssistance, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGMSAFNetworkAssistance (value: FiveGMSAFNetworkAssistance, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGMSAFNetworkAssistance) { _cached_encoder_for_FiveGMSAFNetworkAssistance = function (value: FiveGMSAFNetworkAssistance, elGetter: $.ASN1Encoder<FiveGMSAFNetworkAssistance>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SBIType, $.BER)(value.networkAssistanceSessionResource, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_NAOperationType, $.BER)(value.nAOperationType, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FiveGMSAFNetworkAssistance(value, elGetter);
}


/* eslint-enable */
