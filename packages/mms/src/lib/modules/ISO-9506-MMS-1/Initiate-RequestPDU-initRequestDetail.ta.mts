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
 * @summary Initiate_RequestPDU_initRequestDetail
 * @description
 *
 * Calling user's proposed minor version, parameter CBBs, and service support.
 * Additional fields require `csr`/`cspi`. A proposed minor version N means
 * support for all minor versions 1..N (ISO 9506-1:2003 §8.2;
 * ISO 9506-2:2003 §8.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Initiate-RequestPDU-initRequestDetail ::= SEQUENCE {
 *     proposedVersionNumber [0] IMPLICIT Integer16,
 *     proposedParameterCBB [1] IMPLICIT ParameterSupportOptions,
 *     servicesSupportedCalling [2] IMPLICIT ServiceSupportOptions,
 *    ...,
 *     additionalSupportedCalling [3] IMPLICIT AdditionalSupportOptions,
 *     additionalCbbSupportedCalling [4] IMPLICIT AdditionalCBBOptions,
 *     privilegeClassIdentityCalling [5] IMPLICIT VisibleString
 * }
 * ```
 * 
 * @class
 */
export
class Initiate_RequestPDU_initRequestDetail {
    constructor (
        /**
         * @summary `proposedVersionNumber`.
         * @description
         *
         * Proposed minor version of ISO 9506-1/2. Provider may reduce, not
         * below 1. Major versions are distinct abstract syntaxes
         * (ISO 9506-1:2003 §8.2.1.1.5).
         * @public
         * @readonly
         */
        readonly proposedVersionNumber: Integer16,
        /**
         * @summary `proposedParameterCBB`.
         * @description
         *
         * Parameter CBBs the calling user supports. Indication is the
         * intersection with the calling provider. Bit 1 = support. Encode all
         * bits; ignore extra received bits (ISO 9506-1:2003 §8.2.1.1.6).
         * @public
         * @readonly
         */
        readonly proposedParameterCBB: ParameterSupportOptions,
        /**
         * @summary `servicesSupportedCalling`.
         * @description
         *
         * Services (and modifiers) the calling user supports. Indication is the
         * intersection with the calling provider. Unsupported receipt shall be
         * Rejected UNRECOGNIZED-SERVICE (ISO 9506-1:2003 §8.2.1.1.8).
         * @public
         * @readonly
         */
        readonly servicesSupportedCalling: ServiceSupportOptions,
        /**
         * @summary `additionalSupportedCalling`.
         * @description
         *
         * Extended services supported by the calling user. Present only if
         * `csr` or `cspi` was offered in Proposed Parameter CBB
         * (ISO 9506-1:2003 §8.2.1.1.9).
         * @public
         * @readonly
         */
        readonly additionalSupportedCalling: AdditionalSupportOptions,
        /**
         * @summary `additionalCbbSupportedCalling`.
         * @description
         *
         * Additional parameter CBBs. Present only if `cspi` was offered in
         * Proposed Parameter CBB (ISO 9506-1:2003 §8.2.1.1.7).
         * @public
         * @readonly
         */
        readonly additionalCbbSupportedCalling: AdditionalCBBOptions,
        /**
         * @summary `privilegeClassIdentityCalling`.
         * @description
         *
         * Present in the abstract syntax when `cspi` is offered
         * (ISO 9506-2:2003 §8.2). ISO 9506-1:2003 does not specify the semantics of
         * this field.
         * @public
         * @readonly
         */
        readonly privilegeClassIdentityCalling: VisibleString,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Initiate_RequestPDU_initRequestDetail
     * @description
     * 
     * This takes an `object` and converts it to a `Initiate_RequestPDU_initRequestDetail`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Initiate_RequestPDU_initRequestDetail`.
     * @returns {Initiate_RequestPDU_initRequestDetail}
     */
    public static _from_object (_o: { [_K in keyof (Initiate_RequestPDU_initRequestDetail)]: (Initiate_RequestPDU_initRequestDetail)[_K] }): Initiate_RequestPDU_initRequestDetail {
        return new Initiate_RequestPDU_initRequestDetail(_o.proposedVersionNumber, _o.proposedParameterCBB, _o.servicesSupportedCalling, _o.additionalSupportedCalling, _o.additionalCbbSupportedCalling, _o.privilegeClassIdentityCalling, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Initiate_RequestPDU_initRequestDetail
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Initiate_RequestPDU_initRequestDetail: $.ComponentSpec[] = [
    new $.ComponentSpec("proposedVersionNumber", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("proposedParameterCBB", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servicesSupportedCalling", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Initiate_RequestPDU_initRequestDetail
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Initiate_RequestPDU_initRequestDetail: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Initiate_RequestPDU_initRequestDetail
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_Initiate_RequestPDU_initRequestDetail: $.ComponentSpec[] = [
    new $.ComponentSpec("additionalSupportedCalling", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("additionalCbbSupportedCalling", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("privilegeClassIdentityCalling", false, $.hasTag(_TagClass.context, 5))
];

let _cached_decoder_for_Initiate_RequestPDU_initRequestDetail: $.ASN1Decoder<Initiate_RequestPDU_initRequestDetail> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Initiate_RequestPDU_initRequestDetail
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Initiate_RequestPDU_initRequestDetail (el: _Element): Initiate_RequestPDU_initRequestDetail {
    if (!_cached_decoder_for_Initiate_RequestPDU_initRequestDetail) { _cached_decoder_for_Initiate_RequestPDU_initRequestDetail = function (el: _Element): Initiate_RequestPDU_initRequestDetail {
    let proposedVersionNumber!: Integer16;
    let proposedParameterCBB!: ParameterSupportOptions;
    let servicesSupportedCalling!: ServiceSupportOptions;
    let additionalSupportedCalling!: AdditionalSupportOptions;
    let additionalCbbSupportedCalling!: AdditionalCBBOptions;
    let privilegeClassIdentityCalling!: VisibleString;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "proposedVersionNumber": (_el: _Element): void => { proposedVersionNumber = $._decode_implicit<Integer16>(() => _decode_Integer16)(_el); },
        "proposedParameterCBB": (_el: _Element): void => { proposedParameterCBB = $._decode_implicit<ParameterSupportOptions>(() => _decode_ParameterSupportOptions)(_el); },
        "servicesSupportedCalling": (_el: _Element): void => { servicesSupportedCalling = $._decode_implicit<ServiceSupportOptions>(() => _decode_ServiceSupportOptions)(_el); },
        "additionalSupportedCalling": (_el: _Element): void => { additionalSupportedCalling = $._decode_implicit<AdditionalSupportOptions>(() => _decode_AdditionalSupportOptions)(_el); },
        "additionalCbbSupportedCalling": (_el: _Element): void => { additionalCbbSupportedCalling = $._decode_implicit<AdditionalCBBOptions>(() => _decode_AdditionalCBBOptions)(_el); },
        "privilegeClassIdentityCalling": (_el: _Element): void => { privilegeClassIdentityCalling = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Initiate_RequestPDU_initRequestDetail,
        _extension_additions_list_spec_for_Initiate_RequestPDU_initRequestDetail,
        _root_component_type_list_2_spec_for_Initiate_RequestPDU_initRequestDetail,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Initiate_RequestPDU_initRequestDetail(
        proposedVersionNumber,
        proposedParameterCBB,
        servicesSupportedCalling,
        additionalSupportedCalling,
        additionalCbbSupportedCalling,
        privilegeClassIdentityCalling,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Initiate_RequestPDU_initRequestDetail(el);
}

let _cached_encoder_for_Initiate_RequestPDU_initRequestDetail: $.ASN1Encoder<Initiate_RequestPDU_initRequestDetail> | null = null;

/**
 * @summary Encodes a(n) Initiate_RequestPDU_initRequestDetail into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Initiate_RequestPDU_initRequestDetail, encoded as an ASN.1 Element.
 */
export
function _encode_Initiate_RequestPDU_initRequestDetail (value: Initiate_RequestPDU_initRequestDetail, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Initiate_RequestPDU_initRequestDetail) { _cached_encoder_for_Initiate_RequestPDU_initRequestDetail = function (value: Initiate_RequestPDU_initRequestDetail): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Integer16, $.BER)(value.proposedVersionNumber, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ParameterSupportOptions, $.BER)(value.proposedParameterCBB, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ServiceSupportOptions, $.BER)(value.servicesSupportedCalling, $.BER)
        ],
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_AdditionalSupportOptions, $.BER)(value.additionalSupportedCalling, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_AdditionalCBBOptions, $.BER)(value.additionalCbbSupportedCalling, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeVisibleString, $.BER)(value.privilegeClassIdentityCalling, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
   ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Initiate_RequestPDU_initRequestDetail(value, elGetter);
}


/* eslint-enable */
