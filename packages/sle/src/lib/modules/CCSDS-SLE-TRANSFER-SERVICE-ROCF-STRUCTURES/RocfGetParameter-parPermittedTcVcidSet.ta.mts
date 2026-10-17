/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_permittedTcVcidSet
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { TcVcidSet, _decode_TcVcidSet, _encode_TcVcidSet } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/TcVcidSet.ta.mjs";



/**
 * @summary RocfGetParameter_parPermittedTcVcidSet
 * @description
 * 
 * Successful ROCF-GET-PARAMETER result for the permitted telecommand-VC set.
 * Service management sets it. The value is null when a telecommand VC must not
 * be selected, for example when the OCFs to deliver are not CLCWs.
 *
 * CCSDS 911.5-B-4, section 3.4.2.9 and table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfGetParameter-parPermittedTcVcidSet ::= SEQUENCE
 *    {  parameterName                 ParameterName (permittedTcVcidSet)
 *    ,  parameterValue                TcVcidSet
 *    }
 * ```
 * 
 * @class
 */
export
class RocfGetParameter_parPermittedTcVcidSet {
    /**
     * @summary `parameterName`.
     * @description
     * 
     * Fixed to permittedTcVcidSet. CCSDS 911.5-B-4, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * 
     * noTcVC means telecommand-VC selection is not permissible. tcVcids lists
     * the telecommand VCs the user may name when the control word type is clcw.
     * A START value outside this set is an invalid tc-vcid.
     *
     * CCSDS 911.5-B-4, sections 3.4.2.9 and 3.4.2.12 and table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: TcVcidSet;

    constructor (
        parameterName: ParameterName,
        parameterValue: TcVcidSet
    ) {
        if (parameterName !== ParameterName_permittedTcVcidSet) {
            throw new ASN1Error("RocfGetParameter_parPermittedTcVcidSet.parameterName violates ParameterName (permittedTcVcidSet)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RocfGetParameter_parPermittedTcVcidSet
     * @description
     * 
     * This takes an `object` and converts it to a `RocfGetParameter_parPermittedTcVcidSet`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RocfGetParameter_parPermittedTcVcidSet`.
     * @returns {RocfGetParameter_parPermittedTcVcidSet}
     */
    public static _from_object (_o: { [_K in keyof (RocfGetParameter_parPermittedTcVcidSet)]: (RocfGetParameter_parPermittedTcVcidSet)[_K] }): RocfGetParameter_parPermittedTcVcidSet {
        return new RocfGetParameter_parPermittedTcVcidSet(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RocfGetParameter_parPermittedTcVcidSet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RocfGetParameter_parPermittedTcVcidSet: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of RocfGetParameter_parPermittedTcVcidSet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RocfGetParameter_parPermittedTcVcidSet: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RocfGetParameter_parPermittedTcVcidSet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RocfGetParameter_parPermittedTcVcidSet: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RocfGetParameter_parPermittedTcVcidSet: $.ASN1Decoder<RocfGetParameter_parPermittedTcVcidSet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfGetParameter_parPermittedTcVcidSet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfGetParameter_parPermittedTcVcidSet (el: _Element): RocfGetParameter_parPermittedTcVcidSet {
    if (!_cached_decoder_for_RocfGetParameter_parPermittedTcVcidSet) { _cached_decoder_for_RocfGetParameter_parPermittedTcVcidSet = function (el: _Element): RocfGetParameter_parPermittedTcVcidSet {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RocfGetParameter-parPermittedTcVcidSet contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: TcVcidSet;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_TcVcidSet(sequence[1]);
    return new RocfGetParameter_parPermittedTcVcidSet(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RocfGetParameter_parPermittedTcVcidSet(el);
}

let _cached_encoder_for_RocfGetParameter_parPermittedTcVcidSet: $.ASN1Encoder<RocfGetParameter_parPermittedTcVcidSet> | null = null;

/**
 * @summary Encodes a(n) RocfGetParameter_parPermittedTcVcidSet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfGetParameter_parPermittedTcVcidSet, encoded as an ASN.1 Element.
 */
export
function _encode_RocfGetParameter_parPermittedTcVcidSet (value: RocfGetParameter_parPermittedTcVcidSet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfGetParameter_parPermittedTcVcidSet) { _cached_encoder_for_RocfGetParameter_parPermittedTcVcidSet = function (value: RocfGetParameter_parPermittedTcVcidSet, _elGetter: $.ASN1Encoder<RocfGetParameter_parPermittedTcVcidSet>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_TcVcidSet(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RocfGetParameter_parPermittedTcVcidSet(value, elGetter);
}


/* eslint-enable */
