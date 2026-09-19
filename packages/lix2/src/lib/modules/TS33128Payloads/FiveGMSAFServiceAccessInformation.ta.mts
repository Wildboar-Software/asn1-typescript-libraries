/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";


/**
 * @summary FiveGMSAFServiceAccessInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMSAFServiceAccessInformation ::= SEQUENCE
 * {
 *     gPSI                                [1] GPSI,
 *     serviceAccessInformationResource    [2] SBIType
 * }
 * ```
 * 
 * @class
 */
export
class FiveGMSAFServiceAccessInformation {
    constructor (
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: GPSI,
        /**
         * @summary `serviceAccessInformationResource`.
         * @public
         * @readonly
         */
        readonly serviceAccessInformationResource: SBIType
    ) {}

    /**
     * @summary Restructures an object into a FiveGMSAFServiceAccessInformation
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGMSAFServiceAccessInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGMSAFServiceAccessInformation`.
     * @returns {FiveGMSAFServiceAccessInformation}
     */
    public static _from_object (_o: { [_K in keyof (FiveGMSAFServiceAccessInformation)]: (FiveGMSAFServiceAccessInformation)[_K] }): FiveGMSAFServiceAccessInformation {
        return new FiveGMSAFServiceAccessInformation(_o.gPSI, _o.serviceAccessInformationResource);
    }


}

/**
 * @summary The Leading Root Component Types of FiveGMSAFServiceAccessInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGMSAFServiceAccessInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceAccessInformationResource", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of FiveGMSAFServiceAccessInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGMSAFServiceAccessInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGMSAFServiceAccessInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGMSAFServiceAccessInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGMSAFServiceAccessInformation: $.ASN1Decoder<FiveGMSAFServiceAccessInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGMSAFServiceAccessInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGMSAFServiceAccessInformation (el: _Element): FiveGMSAFServiceAccessInformation {
    if (!_cached_decoder_for_FiveGMSAFServiceAccessInformation) { _cached_decoder_for_FiveGMSAFServiceAccessInformation = function (el: _Element): FiveGMSAFServiceAccessInformation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FiveGMSAFServiceAccessInformation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "gPSI";
    sequence[1].name = "serviceAccessInformationResource";
    let gPSI!: GPSI;
    let serviceAccessInformationResource!: SBIType;
    gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(sequence[0]);
    serviceAccessInformationResource = $._decode_implicit<SBIType>(() => _decode_SBIType)(sequence[1]);
    return new FiveGMSAFServiceAccessInformation(
        gPSI,
        serviceAccessInformationResource,

    );
}; }
    return _cached_decoder_for_FiveGMSAFServiceAccessInformation(el);
}

let _cached_encoder_for_FiveGMSAFServiceAccessInformation: $.ASN1Encoder<FiveGMSAFServiceAccessInformation> | null = null;

/**
 * @summary Encodes a(n) FiveGMSAFServiceAccessInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGMSAFServiceAccessInformation, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGMSAFServiceAccessInformation (value: FiveGMSAFServiceAccessInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGMSAFServiceAccessInformation) { _cached_encoder_for_FiveGMSAFServiceAccessInformation = function (value: FiveGMSAFServiceAccessInformation, elGetter: $.ASN1Encoder<FiveGMSAFServiceAccessInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_GPSI, $.BER)(value.gPSI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SBIType, $.BER)(value.serviceAccessInformationResource, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FiveGMSAFServiceAccessInformation(value, elGetter);
}


/* eslint-enable */
