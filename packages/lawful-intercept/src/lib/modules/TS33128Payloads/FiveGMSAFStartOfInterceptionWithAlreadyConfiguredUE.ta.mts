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


/**
 * @summary FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE
 * @description
 * 
 * The IRI-POI in the 5GMS AF shall generate an xIRI containing an
 * FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE record when the IRI-POI
 * present in the 5GMS AF detects that interception is activated for a target UE
 * which Media Session Handler has already been configured with the service
 * access information.
 *
 * Table 7.15.3-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.15.2.8.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE ::= SEQUENCE
 * {
 *     gPSI                                [1] GPSI,
 *     serviceAccessInformationResource    [2] SBIType
 * }
 * ```
 * 
 * @class
 */
export
class FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE {
    /**
     * @summary `gPSI`.
     * @description
     *
     * GPSI of the target UE.
     *
     * 3GPP TS 33.128, clause 7.15.2.8.
     *
     * @public
     * @readonly
     */
    readonly gPSI: GPSI;
    /**
     * @summary `serviceAccessInformationResource`.
     * @description
     *
     * Includes service access information resource data encoded according to
     * 26.512 [98] clause 11.2.3. The SBIReference for this parameter shall be
     * populated with
     * 'TS26512_M5_ServiceAccessInformation.yaml#/components/schemas/ServiceAccessInformationResource'.
     *
     * 3GPP TS 33.128, clause 7.15.2.8.
     *
     * @public
     * @readonly
     */
    readonly serviceAccessInformationResource: SBIType;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        gPSI: GPSI,
        serviceAccessInformationResource: SBIType,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.gPSI = gPSI;
        this.serviceAccessInformationResource = serviceAccessInformationResource;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE`.
     * @returns {FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE}
     */
    public static _from_object (_o: { [_K in keyof (FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE)]: (FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE)[_K] }): FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE {
        return new FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE(_o.gPSI, _o.serviceAccessInformationResource, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE: $.ComponentSpec[] = [
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceAccessInformationResource", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE: $.ASN1Decoder<FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE (el: _Element): FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE {
    if (!_cached_decoder_for_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE) { _cached_decoder_for_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE = function (el: _Element): FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "gPSI";
    sequence[1].name = "serviceAccessInformationResource";
    let gPSI!: GPSI;
    let serviceAccessInformationResource!: SBIType;
    gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(sequence[0]);
    serviceAccessInformationResource = $._decode_implicit<SBIType>(() => _decode_SBIType)(sequence[1]);
    return new FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE(
        gPSI,
        serviceAccessInformationResource,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE(el);
}

let _cached_encoder_for_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE: $.ASN1Encoder<FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE> | null = null;

/**
 * @summary Encodes a(n) FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE (value: FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE) { _cached_encoder_for_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE = function (value: FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE, elGetter: $.ASN1Encoder<FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SBIType, $.BER)(value.serviceAccessInformationResource, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE(value, elGetter);
}


/* eslint-enable */
