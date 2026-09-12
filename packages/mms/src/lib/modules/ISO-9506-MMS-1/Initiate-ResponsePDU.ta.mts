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
import { Initiate_ResponsePDU_initResponseDetail, _decode_Initiate_ResponsePDU_initResponseDetail, _encode_Initiate_ResponsePDU_initResponseDetail } from "../ISO-9506-MMS-1/Initiate-ResponsePDU-initResponseDetail.ta.mjs";
// export { Initiate_ResponsePDU_initResponseDetail, _decode_Initiate_ResponsePDU_initResponseDetail, _encode_Initiate_ResponsePDU_initResponseDetail } from "../ISO-9506-MMS-1/Initiate-ResponsePDU-initResponseDetail.ta.mjs";


/**
 * @summary Initiate_ResponsePDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Initiate-ResponsePDU ::= SEQUENCE {
 *    localDetailCalled                    [0] IMPLICIT Integer32 OPTIONAL,
 *    negotiatedMaxServOutstandingCalling  [1] IMPLICIT Integer16,
 *    negotiatedMaxServOutstandingCalled   [2] IMPLICIT Integer16,
 *    negotiatedDataStructureNestingLevel  [3] IMPLICIT Integer8 OPTIONAL,
 *    initResponseDetail                   [4] IMPLICIT SEQUENCE {
 *        negotiatedVersionNumber              [0] IMPLICIT Integer16,
 *        negotiatedParameterCBB               [1] IMPLICIT ParameterSupportOptions,
 *        servicesSupportedCalled              [2] IMPLICIT ServiceSupportOptions,
 *        ...
 * ,      additionalSupportedCalled            [3] IMPLICIT AdditionalSupportOptions
 * ,      additionalCbbSupportedCalled         [4] IMPLICIT AdditionalCBBOptions,
 *        privilegeClassIdentityCalled         [5] IMPLICIT VisibleString
 *        }
 *    }
 * ```
 * 
 * @class
 */
export
class Initiate_ResponsePDU {
    constructor (
        /**
         * @summary `localDetailCalled`.
         * @public
         * @readonly
         */
        readonly localDetailCalled: OPTIONAL<Integer32>,
        /**
         * @summary `negotiatedMaxServOutstandingCalling`.
         * @public
         * @readonly
         */
        readonly negotiatedMaxServOutstandingCalling: Integer16,
        /**
         * @summary `negotiatedMaxServOutstandingCalled`.
         * @public
         * @readonly
         */
        readonly negotiatedMaxServOutstandingCalled: Integer16,
        /**
         * @summary `negotiatedDataStructureNestingLevel`.
         * @public
         * @readonly
         */
        readonly negotiatedDataStructureNestingLevel: OPTIONAL<Integer8>,
        /**
         * @summary `initResponseDetail`.
         * @public
         * @readonly
         */
        readonly initResponseDetail: Initiate_ResponsePDU_initResponseDetail
    ) {}

    /**
     * @summary Restructures an object into a Initiate_ResponsePDU
     * @description
     * 
     * This takes an `object` and converts it to a `Initiate_ResponsePDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Initiate_ResponsePDU`.
     * @returns {Initiate_ResponsePDU}
     */
    public static _from_object (_o: { [_K in keyof (Initiate_ResponsePDU)]: (Initiate_ResponsePDU)[_K] }): Initiate_ResponsePDU {
        return new Initiate_ResponsePDU(_o.localDetailCalled, _o.negotiatedMaxServOutstandingCalling, _o.negotiatedMaxServOutstandingCalled, _o.negotiatedDataStructureNestingLevel, _o.initResponseDetail);
    }


}

/**
 * @summary The Leading Root Component Types of Initiate_ResponsePDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Initiate_ResponsePDU: $.ComponentSpec[] = [
    new $.ComponentSpec("localDetailCalled", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("negotiatedMaxServOutstandingCalling", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("negotiatedMaxServOutstandingCalled", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("negotiatedDataStructureNestingLevel", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("initResponseDetail", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of Initiate_ResponsePDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Initiate_ResponsePDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Initiate_ResponsePDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Initiate_ResponsePDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Initiate_ResponsePDU: $.ASN1Decoder<Initiate_ResponsePDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Initiate_ResponsePDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Initiate_ResponsePDU (el: _Element): Initiate_ResponsePDU {
    if (!_cached_decoder_for_Initiate_ResponsePDU) { _cached_decoder_for_Initiate_ResponsePDU = function (el: _Element): Initiate_ResponsePDU {
    let localDetailCalled: OPTIONAL<Integer32>;
    let negotiatedMaxServOutstandingCalling!: Integer16;
    let negotiatedMaxServOutstandingCalled!: Integer16;
    let negotiatedDataStructureNestingLevel: OPTIONAL<Integer8>;
    let initResponseDetail!: Initiate_ResponsePDU_initResponseDetail;
    const callbacks: $.DecodingMap = {
        "localDetailCalled": (_el: _Element): void => { localDetailCalled = $._decode_implicit<Integer32>(() => _decode_Integer32)(_el); },
        "negotiatedMaxServOutstandingCalling": (_el: _Element): void => { negotiatedMaxServOutstandingCalling = $._decode_implicit<Integer16>(() => _decode_Integer16)(_el); },
        "negotiatedMaxServOutstandingCalled": (_el: _Element): void => { negotiatedMaxServOutstandingCalled = $._decode_implicit<Integer16>(() => _decode_Integer16)(_el); },
        "negotiatedDataStructureNestingLevel": (_el: _Element): void => { negotiatedDataStructureNestingLevel = $._decode_implicit<Integer8>(() => _decode_Integer8)(_el); },
        "initResponseDetail": (_el: _Element): void => { initResponseDetail = $._decode_implicit<Initiate_ResponsePDU_initResponseDetail>(() => _decode_Initiate_ResponsePDU_initResponseDetail)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Initiate_ResponsePDU,
        _extension_additions_list_spec_for_Initiate_ResponsePDU,
        _root_component_type_list_2_spec_for_Initiate_ResponsePDU,
        undefined,
    );
    return new Initiate_ResponsePDU(
        localDetailCalled,
        negotiatedMaxServOutstandingCalling,
        negotiatedMaxServOutstandingCalled,
        negotiatedDataStructureNestingLevel,
        initResponseDetail
    );
}; }
    return _cached_decoder_for_Initiate_ResponsePDU(el);
}

let _cached_encoder_for_Initiate_ResponsePDU: $.ASN1Encoder<Initiate_ResponsePDU> | null = null;

/**
 * @summary Encodes a(n) Initiate_ResponsePDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Initiate_ResponsePDU, encoded as an ASN.1 Element.
 */
export
function _encode_Initiate_ResponsePDU (value: Initiate_ResponsePDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Initiate_ResponsePDU) { _cached_encoder_for_Initiate_ResponsePDU = function (value: Initiate_ResponsePDU): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.localDetailCalled === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Integer32, $.BER)(value.localDetailCalled, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Integer16, $.BER)(value.negotiatedMaxServOutstandingCalling, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Integer16, $.BER)(value.negotiatedMaxServOutstandingCalled, $.BER),
            /* IF_ABSENT  */ ((value.negotiatedDataStructureNestingLevel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Integer8, $.BER)(value.negotiatedDataStructureNestingLevel, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Initiate_ResponsePDU_initResponseDetail, $.BER)(value.initResponseDetail, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Initiate_ResponsePDU(value, elGetter);
}


/* eslint-enable */
