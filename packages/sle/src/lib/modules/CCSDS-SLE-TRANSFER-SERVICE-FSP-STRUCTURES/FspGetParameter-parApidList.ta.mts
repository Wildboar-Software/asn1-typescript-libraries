/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_apidList
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { ApidList, _decode_ApidList, _encode_ApidList } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/ApidList.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary FspGetParameter_parApidList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parApidList ::= SEQUENCE
 *    {  parameterName     ParameterName (apidList)
 *    ,  parameterValue    ApidList
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parApidList {
    /**
     * @summary `parameterName`.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @public
     * @readonly
     */
    readonly parameterValue: ApidList;

    constructor (
        parameterName: ParameterName,
        parameterValue: ApidList
    ) {
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_apidList)])) {
            throw new ASN1Error("FspGetParameter_parApidList.parameterName violates ParameterName (apidList)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parApidList
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parApidList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parApidList`.
     * @returns {FspGetParameter_parApidList}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parApidList)]: (FspGetParameter_parApidList)[_K] }): FspGetParameter_parApidList {
        return new FspGetParameter_parApidList(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parApidList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parApidList: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parApidList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parApidList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parApidList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parApidList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parApidList: $.ASN1Decoder<FspGetParameter_parApidList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parApidList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parApidList (el: _Element): FspGetParameter_parApidList {
    if (!_cached_decoder_for_FspGetParameter_parApidList) { _cached_decoder_for_FspGetParameter_parApidList = function (el: _Element): FspGetParameter_parApidList {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parApidList contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: ApidList;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_ApidList(sequence[1]);
    return new FspGetParameter_parApidList(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parApidList(el);
}

let _cached_encoder_for_FspGetParameter_parApidList: $.ASN1Encoder<FspGetParameter_parApidList> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parApidList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parApidList, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parApidList (value: FspGetParameter_parApidList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parApidList) { _cached_encoder_for_FspGetParameter_parApidList = function (value: FspGetParameter_parApidList, _elGetter: $.ASN1Encoder<FspGetParameter_parApidList>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_ApidList(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parApidList(value, elGetter);
}


/* eslint-enable */
