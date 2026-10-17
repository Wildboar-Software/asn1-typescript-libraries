/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_permittedGvcidSet
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { GvcIdSet, _decode_GvcIdSet, _encode_GvcIdSet } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/GvcIdSet.ta.mjs";



/**
 * @summary RcfGetParameter_parPermittedGvcidSet
 * @description
 *
 * Returned value of permitted-global-VCID-set: the Master Channel and Virtual
 * Channels the user may name in RCF-START. Service management sets the set.
 *
 * CCSDS 911.2-B-4, section 3.4.2.7 and table 3-11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfGetParameter-parPermittedGvcidSet ::= SEQUENCE
 *     { parameterName                 ParameterName (permittedGvcidSet)
 *     , parameterValue                GvcIdSet
 *     }
 * ```
 * 
 * @class
 */
export
class RcfGetParameter_parPermittedGvcidSet {
    /**
     * @summary `parameterName`.
     * @description
     *
     * Identifies this value as permitted-global-VCID-set (permittedGvcidSet).
     *
     * CCSDS 911.2-B-4, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     *
     * Master Channels and Virtual Channels permitted for this service instance.
     *
     * CCSDS 911.2-B-4, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: GvcIdSet;

    constructor (
        parameterName: ParameterName,
        parameterValue: GvcIdSet
    ) {
        if (parameterName !== ParameterName_permittedGvcidSet) {
            throw new ASN1Error("RcfGetParameter_parPermittedGvcidSet.parameterName violates ParameterName (permittedGvcidSet)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RcfGetParameter_parPermittedGvcidSet
     * @description
     * 
     * This takes an `object` and converts it to a
     * `RcfGetParameter_parPermittedGvcidSet`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RcfGetParameter_parPermittedGvcidSet`.
     * @returns {RcfGetParameter_parPermittedGvcidSet}
     */
    public static _from_object (_o: { [_K in keyof (RcfGetParameter_parPermittedGvcidSet)]: (RcfGetParameter_parPermittedGvcidSet)[_K] }): RcfGetParameter_parPermittedGvcidSet {
        return new RcfGetParameter_parPermittedGvcidSet(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RcfGetParameter_parPermittedGvcidSet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RcfGetParameter_parPermittedGvcidSet: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 17))
];

/**
 * @summary The Trailing Root Component Types of RcfGetParameter_parPermittedGvcidSet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RcfGetParameter_parPermittedGvcidSet: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RcfGetParameter_parPermittedGvcidSet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RcfGetParameter_parPermittedGvcidSet: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RcfGetParameter_parPermittedGvcidSet: $.ASN1Decoder<RcfGetParameter_parPermittedGvcidSet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfGetParameter_parPermittedGvcidSet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfGetParameter_parPermittedGvcidSet (el: _Element): RcfGetParameter_parPermittedGvcidSet {
    if (!_cached_decoder_for_RcfGetParameter_parPermittedGvcidSet) { _cached_decoder_for_RcfGetParameter_parPermittedGvcidSet = function (el: _Element): RcfGetParameter_parPermittedGvcidSet {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RcfGetParameter-parPermittedGvcidSet contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: GvcIdSet;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_GvcIdSet(sequence[1]);
    return new RcfGetParameter_parPermittedGvcidSet(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RcfGetParameter_parPermittedGvcidSet(el);
}

let _cached_encoder_for_RcfGetParameter_parPermittedGvcidSet: $.ASN1Encoder<RcfGetParameter_parPermittedGvcidSet> | null = null;

/**
 * @summary Encodes a(n) RcfGetParameter_parPermittedGvcidSet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfGetParameter_parPermittedGvcidSet, encoded as an ASN.1 Element.
 */
export
function _encode_RcfGetParameter_parPermittedGvcidSet (value: RcfGetParameter_parPermittedGvcidSet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfGetParameter_parPermittedGvcidSet) { _cached_encoder_for_RcfGetParameter_parPermittedGvcidSet = function (value: RcfGetParameter_parPermittedGvcidSet, _elGetter: $.ASN1Encoder<RcfGetParameter_parPermittedGvcidSet>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_GvcIdSet(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RcfGetParameter_parPermittedGvcidSet(value, elGetter);
}


/* eslint-enable */
