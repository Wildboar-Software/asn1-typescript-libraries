/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EimConfigurationData, _decode_EimConfigurationData, _encode_EimConfigurationData } from "../SGP32Definitions/EimConfigurationData.ta.mjs";


/**
 * @summary AddInitialEimRequest
 * @description
 *
 * ES10b.AddInitialEim command. The IPAd stores one or more eIM Configuration
 * Data entries on an eUICC that has none. The eUICC runs the checks in section
 * 5.9.4 atomically: any error leaves stored eIM Configuration Data unchanged.
 *
 * Further Associated eIMs are added later by a signed eUICC Package containing
 * addEim (section 3.5.1.1). With IPAe, how this data reaches the eUICC is
 * implementation specific (section 3.5.2.1).
 *
 * SGP.32 v1.2, sections 2.10.2, 3.5.2.1, and 5.9.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddInitialEimRequest ::= [87] SEQUENCE { -- Tag 'BF57' 
 *     eimConfigurationDataList [0] SEQUENCE OF EimConfigurationData
 * }
 * ```
 * 
 * @class
 */
export
class AddInitialEimRequest {
    constructor (
        /**
         * @summary `eimConfigurationDataList`.
         * @description
         *
         * eIM Configuration Data to store. Each entry includes eimId, counterValue,
         * and either eimPublicKey or eimCertificate. Uniqueness of eimId is the IPA's
         * responsibility (section 5.9.4 NOTE).
         *
         * If eimIdType is absent the eUICC stores eimIdTypeProprietary. If
         * eimSupportedProtocol is absent the eUICC stores only the eimProprietary bit.
         * If euiccCiPKId is absent the eUICC stores the first entry of
         * euiccCiPKIdListForSigning in eUICCInfo2. associationToken set to -1 requests
         * calculation of an association token. eimFqdn and trustedPublicKeyDataTls may
         * be included.
         *
         * SGP.32 v1.2, section 5.9.4.
         * @public
         * @readonly
         */
        readonly eimConfigurationDataList: EimConfigurationData[]
    ) {}

    /**
     * @summary Restructures an object into a AddInitialEimRequest
     * @description
     * 
     * This takes an `object` and converts it to a `AddInitialEimRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddInitialEimRequest`.
     * @returns {AddInitialEimRequest}
     */
    public static _from_object (_o: { [_K in keyof (AddInitialEimRequest)]: (AddInitialEimRequest)[_K] }): AddInitialEimRequest {
        return new AddInitialEimRequest(_o.eimConfigurationDataList);
    }


}

/**
 * @summary The Leading Root Component Types of AddInitialEimRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AddInitialEimRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("eimConfigurationDataList", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of AddInitialEimRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AddInitialEimRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AddInitialEimRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AddInitialEimRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AddInitialEimRequest: $.ASN1Decoder<AddInitialEimRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddInitialEimRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddInitialEimRequest (el: _Element): AddInitialEimRequest {
    if (!_cached_decoder_for_AddInitialEimRequest) { _cached_decoder_for_AddInitialEimRequest = $._decode_implicit<AddInitialEimRequest>(() => function (el: _Element): AddInitialEimRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("AddInitialEimRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "eimConfigurationDataList";
    const eimConfigurationDataList: EimConfigurationData[] = $._decode_implicit<EimConfigurationData[]>(() => $._decodeSequenceOf<EimConfigurationData>(() => _decode_EimConfigurationData))(sequence[0]);
    return new AddInitialEimRequest(
        eimConfigurationDataList,

    );
}); }
    return _cached_decoder_for_AddInitialEimRequest(el);
}

let _cached_encoder_for_AddInitialEimRequest: $.ASN1Encoder<AddInitialEimRequest> | null = null;

/**
 * @summary Encodes a(n) AddInitialEimRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddInitialEimRequest, encoded as an ASN.1 Element.
 */
export
function _encode_AddInitialEimRequest (value: AddInitialEimRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddInitialEimRequest) { _cached_encoder_for_AddInitialEimRequest = $._encode_implicit(_TagClass.context, 87, () => function (value: AddInitialEimRequest): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<EimConfigurationData>(() => _encode_EimConfigurationData, $.BER), $.BER)(value.eimConfigurationDataList, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_AddInitialEimRequest(value, elGetter);
}


/* eslint-enable */
