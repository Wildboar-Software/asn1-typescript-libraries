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
import { DPIOperationType, _decode_DPIOperationType, _encode_DPIOperationType, _enum_for_DPIOperationType } from "../TS33128Payloads/DPIOperationType.ta.mjs";
// export { DPIOperationType, _enum_for_DPIOperationType, DPIOperationType_createDynamicPolicy /* IMPORTED_LONG_ENUMERATION_ITEM */, createDynamicPolicy /* IMPORTED_SHORT_ENUMERATION_ITEM */, DPIOperationType_retrieveDynamicPolicy /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieveDynamicPolicy /* IMPORTED_SHORT_ENUMERATION_ITEM */, DPIOperationType_updateDynamicPolicy /* IMPORTED_LONG_ENUMERATION_ITEM */, updateDynamicPolicy /* IMPORTED_SHORT_ENUMERATION_ITEM */, DPIOperationType_patchDynamicPolicy /* IMPORTED_LONG_ENUMERATION_ITEM */, patchDynamicPolicy /* IMPORTED_SHORT_ENUMERATION_ITEM */, DPIOperationType_destroyDynamicPolicy /* IMPORTED_LONG_ENUMERATION_ITEM */, destroyDynamicPolicy /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DPIOperationType, _encode_DPIOperationType } from "../TS33128Payloads/DPIOperationType.ta.mjs";


/**
 * @summary FiveGMSAFDynamicPolicyInvocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMSAFDynamicPolicyInvocation ::= SEQUENCE
 * {
 *     gPSI                        [1] GPSI,
 *     dynamicPolicyResource       [2] SBIType,
 *     dPIoperationType            [3] DPIOperationType
 * }
 * ```
 * 
 * @class
 */
export
class FiveGMSAFDynamicPolicyInvocation {
    constructor (
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: GPSI,
        /**
         * @summary `dynamicPolicyResource`.
         * @public
         * @readonly
         */
        readonly dynamicPolicyResource: SBIType,
        /**
         * @summary `dPIoperationType`.
         * @public
         * @readonly
         */
        readonly dPIoperationType: DPIOperationType
    ) {}

    /**
     * @summary Restructures an object into a FiveGMSAFDynamicPolicyInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGMSAFDynamicPolicyInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGMSAFDynamicPolicyInvocation`.
     * @returns {FiveGMSAFDynamicPolicyInvocation}
     */
    public static _from_object (_o: { [_K in keyof (FiveGMSAFDynamicPolicyInvocation)]: (FiveGMSAFDynamicPolicyInvocation)[_K] }): FiveGMSAFDynamicPolicyInvocation {
        return new FiveGMSAFDynamicPolicyInvocation(_o.gPSI, _o.dynamicPolicyResource, _o.dPIoperationType);
    }

        /**
         * @summary The enum used as the type of the component `dPIoperationType`
         * @public
         * @static
         */

    public static _enum_for_dPIoperationType = _enum_for_DPIOperationType;
}

/**
 * @summary The Leading Root Component Types of FiveGMSAFDynamicPolicyInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGMSAFDynamicPolicyInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dynamicPolicyResource", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dPIoperationType", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of FiveGMSAFDynamicPolicyInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGMSAFDynamicPolicyInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGMSAFDynamicPolicyInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGMSAFDynamicPolicyInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGMSAFDynamicPolicyInvocation: $.ASN1Decoder<FiveGMSAFDynamicPolicyInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGMSAFDynamicPolicyInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGMSAFDynamicPolicyInvocation (el: _Element): FiveGMSAFDynamicPolicyInvocation {
    if (!_cached_decoder_for_FiveGMSAFDynamicPolicyInvocation) { _cached_decoder_for_FiveGMSAFDynamicPolicyInvocation = function (el: _Element): FiveGMSAFDynamicPolicyInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("FiveGMSAFDynamicPolicyInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "gPSI";
    sequence[1].name = "dynamicPolicyResource";
    sequence[2].name = "dPIoperationType";
    let gPSI!: GPSI;
    let dynamicPolicyResource!: SBIType;
    let dPIoperationType!: DPIOperationType;
    gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(sequence[0]);
    dynamicPolicyResource = $._decode_implicit<SBIType>(() => _decode_SBIType)(sequence[1]);
    dPIoperationType = $._decode_implicit<DPIOperationType>(() => _decode_DPIOperationType)(sequence[2]);
    return new FiveGMSAFDynamicPolicyInvocation(
        gPSI,
        dynamicPolicyResource,
        dPIoperationType,

    );
}; }
    return _cached_decoder_for_FiveGMSAFDynamicPolicyInvocation(el);
}

let _cached_encoder_for_FiveGMSAFDynamicPolicyInvocation: $.ASN1Encoder<FiveGMSAFDynamicPolicyInvocation> | null = null;

/**
 * @summary Encodes a(n) FiveGMSAFDynamicPolicyInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGMSAFDynamicPolicyInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGMSAFDynamicPolicyInvocation (value: FiveGMSAFDynamicPolicyInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGMSAFDynamicPolicyInvocation) { _cached_encoder_for_FiveGMSAFDynamicPolicyInvocation = function (value: FiveGMSAFDynamicPolicyInvocation, elGetter: $.ASN1Encoder<FiveGMSAFDynamicPolicyInvocation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_GPSI, $.BER)(value.gPSI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SBIType, $.BER)(value.dynamicPolicyResource, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_DPIOperationType, $.BER)(value.dPIoperationType, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FiveGMSAFDynamicPolicyInvocation(value, elGetter);
}


/* eslint-enable */
