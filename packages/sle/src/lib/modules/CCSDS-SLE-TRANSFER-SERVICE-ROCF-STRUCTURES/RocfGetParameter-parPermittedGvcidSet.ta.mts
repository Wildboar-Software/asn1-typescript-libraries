/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_permittedGvcidSet
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { type GvcIdSet, _decode_GvcIdSet, _encode_GvcIdSet } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/GvcIdSet.ta.mjs";



/**
 * @summary RocfGetParameter_parPermittedGvcidSet
 * @description
 * 
 * Successful ROCF-GET-PARAMETER result for the permitted global-VCID set.
 * Service management sets the Master Channels and Virtual Channels this
 * instance may use as OCF sources. ROCF-START must request a member of the
 * set.
 *
 * CCSDS 911.5-B-4, sections 2.1 and 3.4.2.7 and table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfGetParameter-parPermittedGvcidSet ::= SEQUENCE
 *    {  parameterName                 ParameterName (permittedGvcidSet)
 *    ,  parameterValue                GvcIdSet
 *    }
 * ```
 * 
 * @class
 */
export
class RocfGetParameter_parPermittedGvcidSet {
    /**
     * @summary `parameterName`.
     * @description
     * 
     * Fixed to permittedGvcidSet. CCSDS 911.5-B-4, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * 
     * Master Channel compositions the user may select. One instance permits one
     * Master Channel, one Virtual Channel, or one Master Channel together with
     * a set of its Virtual Channels. A requested global VCID outside this set
     * is rejected as invalid.
     *
     * CCSDS 911.5-B-4, sections 3.4.2.7 and 3.4.2.12 and table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: GvcIdSet;

    constructor (
        parameterName: ParameterName,
        parameterValue: GvcIdSet
    ) {
        if (parameterName !== ParameterName_permittedGvcidSet) {
            throw new ASN1Error("RocfGetParameter_parPermittedGvcidSet.parameterName violates ParameterName (permittedGvcidSet)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RocfGetParameter_parPermittedGvcidSet
     * @description
     * 
     * This takes an `object` and converts it to a `RocfGetParameter_parPermittedGvcidSet`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RocfGetParameter_parPermittedGvcidSet`.
     * @returns {RocfGetParameter_parPermittedGvcidSet}
     */
    public static _from_object (_o: { [_K in keyof (RocfGetParameter_parPermittedGvcidSet)]: (RocfGetParameter_parPermittedGvcidSet)[_K] }): RocfGetParameter_parPermittedGvcidSet {
        return new RocfGetParameter_parPermittedGvcidSet(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RocfGetParameter_parPermittedGvcidSet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RocfGetParameter_parPermittedGvcidSet: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 17))
];

/**
 * @summary The Trailing Root Component Types of RocfGetParameter_parPermittedGvcidSet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RocfGetParameter_parPermittedGvcidSet: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RocfGetParameter_parPermittedGvcidSet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RocfGetParameter_parPermittedGvcidSet: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RocfGetParameter_parPermittedGvcidSet: $.ASN1Decoder<RocfGetParameter_parPermittedGvcidSet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfGetParameter_parPermittedGvcidSet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfGetParameter_parPermittedGvcidSet (el: _Element): RocfGetParameter_parPermittedGvcidSet {
    if (!_cached_decoder_for_RocfGetParameter_parPermittedGvcidSet) { _cached_decoder_for_RocfGetParameter_parPermittedGvcidSet = function (el: _Element): RocfGetParameter_parPermittedGvcidSet {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RocfGetParameter-parPermittedGvcidSet contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: GvcIdSet;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_GvcIdSet(sequence[1]);
    return new RocfGetParameter_parPermittedGvcidSet(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RocfGetParameter_parPermittedGvcidSet(el);
}

let _cached_encoder_for_RocfGetParameter_parPermittedGvcidSet: $.ASN1Encoder<RocfGetParameter_parPermittedGvcidSet> | null = null;

/**
 * @summary Encodes a(n) RocfGetParameter_parPermittedGvcidSet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfGetParameter_parPermittedGvcidSet, encoded as an ASN.1 Element.
 */
export
function _encode_RocfGetParameter_parPermittedGvcidSet (value: RocfGetParameter_parPermittedGvcidSet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfGetParameter_parPermittedGvcidSet) { _cached_encoder_for_RocfGetParameter_parPermittedGvcidSet = function (value: RocfGetParameter_parPermittedGvcidSet, _elGetter: $.ASN1Encoder<RocfGetParameter_parPermittedGvcidSet>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_GvcIdSet(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RocfGetParameter_parPermittedGvcidSet(value, elGetter);
}


/* eslint-enable */
