/* eslint-disable */
import {
    VisibleString,
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
import { Integer16, _decode_Integer16, _encode_Integer16 } from "../ISO-9506-MMS-1/Integer16.ta.mjs";
import { ParameterSupportOptions, _decode_ParameterSupportOptions, _encode_ParameterSupportOptions } from "../MMS-Object-Module-1/ParameterSupportOptions.ta.mjs";
import { ServiceSupportOptions, _decode_ServiceSupportOptions, _encode_ServiceSupportOptions } from "../MMS-Object-Module-1/ServiceSupportOptions.ta.mjs";
import { AdditionalSupportOptions, _decode_AdditionalSupportOptions, _encode_AdditionalSupportOptions } from "../MMS-Object-Module-1/AdditionalSupportOptions.ta.mjs";
import { AdditionalCBBOptions, _decode_AdditionalCBBOptions, _encode_AdditionalCBBOptions } from "../MMS-Object-Module-1/AdditionalCBBOptions.ta.mjs";


/**
 * @summary Initiate_ResponsePDU_initResponseDetail
 * @description
 *
 * Called user's negotiated minor version, parameter CBBs, and service support.
 * Parameter CBB bits are the intersection of proposed and called-user support.
 * Additional fields require negotiated `csr`/`cspi` (ISO 9506-1:2003 §8.2;
 * ISO 9506-2:2003 §8.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Initiate-ResponsePDU-initResponseDetail ::= SEQUENCE {
 *     negotiatedVersionNumber [0] IMPLICIT Integer16,
 *     negotiatedParameterCBB [1] IMPLICIT ParameterSupportOptions,
 *     servicesSupportedCalled [2] IMPLICIT ServiceSupportOptions,
 *    ...,
 *     additionalSupportedCalled [3] IMPLICIT AdditionalSupportOptions,
 *     additionalCbbSupportedCalled [4] IMPLICIT AdditionalCBBOptions,
 *     privilegeClassIdentityCalled [5] IMPLICIT VisibleString
 * }
 * ```
 * 
 * @class
 */
export
class Initiate_ResponsePDU_initResponseDetail {
    constructor (
        /**
         * @summary `negotiatedVersionNumber`.
         * @description
         *
         * Minor version used on this association. ≤ proposed; not less than 1
         * (ISO 9506-1:2003 §8.2.1.2.5).
         * @public
         * @readonly
         */
        readonly negotiatedVersionNumber: Integer16,
        /**
         * @summary `negotiatedParameterCBB`.
         * @description
         *
         * Negotiated parameter CBBs: intersection of proposed and called-user
         * support. Bit 1 = support. Encode all bits; ignore extras
         * (ISO 9506-1:2003 §8.2.1.2.6).
         * @public
         * @readonly
         */
        readonly negotiatedParameterCBB: ParameterSupportOptions,
        /**
         * @summary `servicesSupportedCalled`.
         * @description
         *
         * Services (and modifiers) the called user supports. Confirmation is
         * the intersection with the called provider. Unsupported receipt shall
         * be Rejected UNRECOGNIZED-SERVICE (ISO 9506-1:2003 §8.2.1.2.8).
         * @public
         * @readonly
         */
        readonly servicesSupportedCalled: ServiceSupportOptions,
        /**
         * @summary `additionalSupportedCalled`.
         * @description
         *
         * Extended services supported by the called user (ISO 9506-1:2003
         * §8.2.1.2.9).
         * @public
         * @readonly
         */
        readonly additionalSupportedCalled: AdditionalSupportOptions,
        /**
         * @summary `additionalCbbSupportedCalled`.
         * @description
         *
         * Additional parameter CBBs. Present only if `cspi` was negotiated
         * (ISO 9506-1:2003 §8.2.1.2.7).
         * @public
         * @readonly
         */
        readonly additionalCbbSupportedCalled: AdditionalCBBOptions,
        /**
         * @summary `privilegeClassIdentityCalled`.
         * @description
         *
         * Present in the abstract syntax when `cspi` is negotiated
         * (ISO 9506-2:2003 §8.2). ISO 9506-1:2003 does not specify the semantics of
         * this field.
         * @public
         * @readonly
         */
        readonly privilegeClassIdentityCalled: VisibleString,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Initiate_ResponsePDU_initResponseDetail
     * @description
     * 
     * This takes an `object` and converts it to a `Initiate_ResponsePDU_initResponseDetail`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Initiate_ResponsePDU_initResponseDetail`.
     * @returns {Initiate_ResponsePDU_initResponseDetail}
     */
    public static _from_object (_o: { [_K in keyof (Initiate_ResponsePDU_initResponseDetail)]: (Initiate_ResponsePDU_initResponseDetail)[_K] }): Initiate_ResponsePDU_initResponseDetail {
        return new Initiate_ResponsePDU_initResponseDetail(_o.negotiatedVersionNumber, _o.negotiatedParameterCBB, _o.servicesSupportedCalled, _o.additionalSupportedCalled, _o.additionalCbbSupportedCalled, _o.privilegeClassIdentityCalled, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Initiate_ResponsePDU_initResponseDetail
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Initiate_ResponsePDU_initResponseDetail: $.ComponentSpec[] = [
    new $.ComponentSpec("negotiatedVersionNumber", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("negotiatedParameterCBB", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servicesSupportedCalled", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Initiate_ResponsePDU_initResponseDetail
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Initiate_ResponsePDU_initResponseDetail: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Initiate_ResponsePDU_initResponseDetail
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_Initiate_ResponsePDU_initResponseDetail: $.ComponentSpec[] = [
    new $.ComponentSpec("additionalSupportedCalled", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("additionalCbbSupportedCalled", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("privilegeClassIdentityCalled", false, $.hasTag(_TagClass.context, 5))
];

let _cached_decoder_for_Initiate_ResponsePDU_initResponseDetail: $.ASN1Decoder<Initiate_ResponsePDU_initResponseDetail> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Initiate_ResponsePDU_initResponseDetail
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Initiate_ResponsePDU_initResponseDetail (el: _Element): Initiate_ResponsePDU_initResponseDetail {
    if (!_cached_decoder_for_Initiate_ResponsePDU_initResponseDetail) { _cached_decoder_for_Initiate_ResponsePDU_initResponseDetail = function (el: _Element): Initiate_ResponsePDU_initResponseDetail {
    let negotiatedVersionNumber!: Integer16;
    let negotiatedParameterCBB!: ParameterSupportOptions;
    let servicesSupportedCalled!: ServiceSupportOptions;
    let additionalSupportedCalled!: AdditionalSupportOptions;
    let additionalCbbSupportedCalled!: AdditionalCBBOptions;
    let privilegeClassIdentityCalled!: VisibleString;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "negotiatedVersionNumber": (_el: _Element): void => { negotiatedVersionNumber = $._decode_implicit<Integer16>(() => _decode_Integer16)(_el); },
        "negotiatedParameterCBB": (_el: _Element): void => { negotiatedParameterCBB = $._decode_implicit<ParameterSupportOptions>(() => _decode_ParameterSupportOptions)(_el); },
        "servicesSupportedCalled": (_el: _Element): void => { servicesSupportedCalled = $._decode_implicit<ServiceSupportOptions>(() => _decode_ServiceSupportOptions)(_el); },
        "additionalSupportedCalled": (_el: _Element): void => { additionalSupportedCalled = $._decode_implicit<AdditionalSupportOptions>(() => _decode_AdditionalSupportOptions)(_el); },
        "additionalCbbSupportedCalled": (_el: _Element): void => { additionalCbbSupportedCalled = $._decode_implicit<AdditionalCBBOptions>(() => _decode_AdditionalCBBOptions)(_el); },
        "privilegeClassIdentityCalled": (_el: _Element): void => { privilegeClassIdentityCalled = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Initiate_ResponsePDU_initResponseDetail,
        _extension_additions_list_spec_for_Initiate_ResponsePDU_initResponseDetail,
        _root_component_type_list_2_spec_for_Initiate_ResponsePDU_initResponseDetail,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Initiate_ResponsePDU_initResponseDetail(
        negotiatedVersionNumber,
        negotiatedParameterCBB,
        servicesSupportedCalled,
        additionalSupportedCalled,
        additionalCbbSupportedCalled,
        privilegeClassIdentityCalled,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Initiate_ResponsePDU_initResponseDetail(el);
}

let _cached_encoder_for_Initiate_ResponsePDU_initResponseDetail: $.ASN1Encoder<Initiate_ResponsePDU_initResponseDetail> | null = null;

/**
 * @summary Encodes a(n) Initiate_ResponsePDU_initResponseDetail into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Initiate_ResponsePDU_initResponseDetail, encoded as an ASN.1 Element.
 */
export
function _encode_Initiate_ResponsePDU_initResponseDetail (value: Initiate_ResponsePDU_initResponseDetail, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Initiate_ResponsePDU_initResponseDetail) { _cached_encoder_for_Initiate_ResponsePDU_initResponseDetail = function (value: Initiate_ResponsePDU_initResponseDetail): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Integer16, $.BER)(value.negotiatedVersionNumber, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ParameterSupportOptions, $.BER)(value.negotiatedParameterCBB, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ServiceSupportOptions, $.BER)(value.servicesSupportedCalled, $.BER)
        ],
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_AdditionalSupportOptions, $.BER)(value.additionalSupportedCalled, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_AdditionalCBBOptions, $.BER)(value.additionalCbbSupportedCalled, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeVisibleString, $.BER)(value.privilegeClassIdentityCalled, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
   ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Initiate_ResponsePDU_initResponseDetail(value, elGetter);
}


/* eslint-enable */
