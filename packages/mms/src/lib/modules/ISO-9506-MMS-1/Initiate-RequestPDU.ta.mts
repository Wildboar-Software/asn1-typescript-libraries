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
import { Integer32, _decode_Integer32, _encode_Integer32 } from "../ISO-9506-MMS-1/Integer32.ta.mjs";
// export { Integer32, _decode_Integer32, _encode_Integer32 } from "../ISO-9506-MMS-1/Integer32.ta.mjs";
import { Integer16, _decode_Integer16, _encode_Integer16 } from "../ISO-9506-MMS-1/Integer16.ta.mjs";
// export { Integer16, _decode_Integer16, _encode_Integer16 } from "../ISO-9506-MMS-1/Integer16.ta.mjs";
import { Integer8, _decode_Integer8, _encode_Integer8 } from "../ISO-9506-MMS-1/Integer8.ta.mjs";
// export { Integer8, _decode_Integer8, _encode_Integer8 } from "../ISO-9506-MMS-1/Integer8.ta.mjs";
import { Initiate_RequestPDU_initRequestDetail, _decode_Initiate_RequestPDU_initRequestDetail, _encode_Initiate_RequestPDU_initRequestDetail } from "../ISO-9506-MMS-1/Initiate-RequestPDU-initRequestDetail.ta.mjs";
// export { Initiate_RequestPDU_initRequestDetail, _decode_Initiate_RequestPDU_initRequestDetail, _encode_Initiate_RequestPDU_initRequestDetail } from "../ISO-9506-MMS-1/Initiate-RequestPDU-initRequestDetail.ta.mjs";


/**
 * @summary Initiate_RequestPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Initiate-RequestPDU ::= SEQUENCE {
 *    localDetailCalling                   [0] IMPLICIT Integer32 OPTIONAL,
 *    proposedMaxServOutstandingCalling    [1] IMPLICIT Integer16,
 *    proposedMaxServOutstandingCalled     [2] IMPLICIT Integer16,
 *    proposedDataStructureNestingLevel    [3] IMPLICIT Integer8 OPTIONAL,
 *    initRequestDetail                    [4] IMPLICIT SEQUENCE {
 *        proposedVersionNumber                [0] IMPLICIT Integer16,
 *        proposedParameterCBB                 [1] IMPLICIT ParameterSupportOptions,
 *        servicesSupportedCalling             [2] IMPLICIT ServiceSupportOptions ,
 *        ...
 * ,      additionalSupportedCalling           [3] IMPLICIT AdditionalSupportOptions
 * ,      additionalCbbSupportedCalling        [4] IMPLICIT AdditionalCBBOptions,
 *        privilegeClassIdentityCalling        [5] IMPLICIT VisibleString
 *        }
 *    }
 * ```
 * 
 * @class
 */
export
class Initiate_RequestPDU {
    constructor (
        /**
         * @summary `localDetailCalling`.
         * @public
         * @readonly
         */
        readonly localDetailCalling: OPTIONAL<Integer32>,
        /**
         * @summary `proposedMaxServOutstandingCalling`.
         * @public
         * @readonly
         */
        readonly proposedMaxServOutstandingCalling: Integer16,
        /**
         * @summary `proposedMaxServOutstandingCalled`.
         * @public
         * @readonly
         */
        readonly proposedMaxServOutstandingCalled: Integer16,
        /**
         * @summary `proposedDataStructureNestingLevel`.
         * @public
         * @readonly
         */
        readonly proposedDataStructureNestingLevel: OPTIONAL<Integer8>,
        /**
         * @summary `initRequestDetail`.
         * @public
         * @readonly
         */
        readonly initRequestDetail: Initiate_RequestPDU_initRequestDetail
    ) {}

    /**
     * @summary Restructures an object into a Initiate_RequestPDU
     * @description
     * 
     * This takes an `object` and converts it to a `Initiate_RequestPDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Initiate_RequestPDU`.
     * @returns {Initiate_RequestPDU}
     */
    public static _from_object (_o: { [_K in keyof (Initiate_RequestPDU)]: (Initiate_RequestPDU)[_K] }): Initiate_RequestPDU {
        return new Initiate_RequestPDU(_o.localDetailCalling, _o.proposedMaxServOutstandingCalling, _o.proposedMaxServOutstandingCalled, _o.proposedDataStructureNestingLevel, _o.initRequestDetail);
    }


}

/**
 * @summary The Leading Root Component Types of Initiate_RequestPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Initiate_RequestPDU: $.ComponentSpec[] = [
    new $.ComponentSpec("localDetailCalling", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("proposedMaxServOutstandingCalling", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("proposedMaxServOutstandingCalled", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("proposedDataStructureNestingLevel", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("initRequestDetail", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of Initiate_RequestPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Initiate_RequestPDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Initiate_RequestPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Initiate_RequestPDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Initiate_RequestPDU: $.ASN1Decoder<Initiate_RequestPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Initiate_RequestPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Initiate_RequestPDU (el: _Element): Initiate_RequestPDU {
    if (!_cached_decoder_for_Initiate_RequestPDU) { _cached_decoder_for_Initiate_RequestPDU = function (el: _Element): Initiate_RequestPDU {
    let localDetailCalling: OPTIONAL<Integer32>;
    let proposedMaxServOutstandingCalling!: Integer16;
    let proposedMaxServOutstandingCalled!: Integer16;
    let proposedDataStructureNestingLevel: OPTIONAL<Integer8>;
    let initRequestDetail!: Initiate_RequestPDU_initRequestDetail;
    const callbacks: $.DecodingMap = {
        "localDetailCalling": (_el: _Element): void => { localDetailCalling = $._decode_implicit<Integer32>(() => _decode_Integer32)(_el); },
        "proposedMaxServOutstandingCalling": (_el: _Element): void => { proposedMaxServOutstandingCalling = $._decode_implicit<Integer16>(() => _decode_Integer16)(_el); },
        "proposedMaxServOutstandingCalled": (_el: _Element): void => { proposedMaxServOutstandingCalled = $._decode_implicit<Integer16>(() => _decode_Integer16)(_el); },
        "proposedDataStructureNestingLevel": (_el: _Element): void => { proposedDataStructureNestingLevel = $._decode_implicit<Integer8>(() => _decode_Integer8)(_el); },
        "initRequestDetail": (_el: _Element): void => { initRequestDetail = $._decode_implicit<Initiate_RequestPDU_initRequestDetail>(() => _decode_Initiate_RequestPDU_initRequestDetail)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Initiate_RequestPDU,
        _extension_additions_list_spec_for_Initiate_RequestPDU,
        _root_component_type_list_2_spec_for_Initiate_RequestPDU,
        undefined,
    );
    return new Initiate_RequestPDU(
        localDetailCalling,
        proposedMaxServOutstandingCalling,
        proposedMaxServOutstandingCalled,
        proposedDataStructureNestingLevel,
        initRequestDetail
    );
}; }
    return _cached_decoder_for_Initiate_RequestPDU(el);
}

let _cached_encoder_for_Initiate_RequestPDU: $.ASN1Encoder<Initiate_RequestPDU> | null = null;

/**
 * @summary Encodes a(n) Initiate_RequestPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Initiate_RequestPDU, encoded as an ASN.1 Element.
 */
export
function _encode_Initiate_RequestPDU (value: Initiate_RequestPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Initiate_RequestPDU) { _cached_encoder_for_Initiate_RequestPDU = function (value: Initiate_RequestPDU): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.localDetailCalling === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Integer32, $.BER)(value.localDetailCalling, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Integer16, $.BER)(value.proposedMaxServOutstandingCalling, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Integer16, $.BER)(value.proposedMaxServOutstandingCalled, $.BER),
            /* IF_ABSENT  */ ((value.proposedDataStructureNestingLevel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Integer8, $.BER)(value.proposedDataStructureNestingLevel, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Initiate_RequestPDU_initRequestDetail, $.BER)(value.initRequestDetail, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Initiate_RequestPDU(value, elGetter);
}


/* eslint-enable */
