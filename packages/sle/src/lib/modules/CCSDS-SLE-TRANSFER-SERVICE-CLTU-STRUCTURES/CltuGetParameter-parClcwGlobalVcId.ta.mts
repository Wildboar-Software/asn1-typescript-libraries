/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_clcwGlobalVcId
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { ClcwGvcId, _decode_ClcwGvcId, _encode_ClcwGvcId } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/ClcwGvcId.ta.mjs";



/**
 * @summary CltuGetParameter_parClcwGlobalVcId
 * @description
 * 
 * clcw-global-VCID. Identifies the Master Channel or Virtual Channel whose CLCW
 * supplies forward-link RF and bit-lock status. notConfigured means this
 * service instance does not evaluate the CLCW. Set by service management. CCSDS
 * 912.1-B-5, table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parClcwGlobalVcId ::= SEQUENCE
 *    {  parameterName                    ParameterName  (clcwGlobalVcId)
 *    ,  parameterValue                   ClcwGvcId
 *    }
 * ```
 * 
 * @class
 */
export
class CltuGetParameter_parClcwGlobalVcId {
    /**
     * @summary `parameterName`.
     * @description
     *
     * Must be `clcwGlobalVcId`. Names the clcw-global-VCID parameter requested
     * by CLTU-GET-PARAMETER. CCSDS 912.1-B-5, section 3.10.2.5 and table 3-11.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     *
     * The GVCID to monitor, or notConfigured when the CLCW is not evaluated.
     * CCSDS 912.1-B-5, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: ClcwGvcId;

    constructor (
        parameterName: ParameterName,
        parameterValue: ClcwGvcId
    ) {
        if (parameterName !== ParameterName_clcwGlobalVcId) {
            throw new ASN1Error("CltuGetParameter_parClcwGlobalVcId.parameterName violates ParameterName (clcwGlobalVcId)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a CltuGetParameter_parClcwGlobalVcId
     * @description
     * 
     * This takes an `object` and converts it to a `CltuGetParameter_parClcwGlobalVcId`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuGetParameter_parClcwGlobalVcId`.
     * @returns {CltuGetParameter_parClcwGlobalVcId}
     */
    public static _from_object (_o: { [_K in keyof (CltuGetParameter_parClcwGlobalVcId)]: (CltuGetParameter_parClcwGlobalVcId)[_K] }): CltuGetParameter_parClcwGlobalVcId {
        return new CltuGetParameter_parClcwGlobalVcId(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of CltuGetParameter_parClcwGlobalVcId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuGetParameter_parClcwGlobalVcId: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of CltuGetParameter_parClcwGlobalVcId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuGetParameter_parClcwGlobalVcId: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuGetParameter_parClcwGlobalVcId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuGetParameter_parClcwGlobalVcId: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuGetParameter_parClcwGlobalVcId: $.ASN1Decoder<CltuGetParameter_parClcwGlobalVcId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parClcwGlobalVcId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parClcwGlobalVcId (el: _Element): CltuGetParameter_parClcwGlobalVcId {
    if (!_cached_decoder_for_CltuGetParameter_parClcwGlobalVcId) { _cached_decoder_for_CltuGetParameter_parClcwGlobalVcId = function (el: _Element): CltuGetParameter_parClcwGlobalVcId {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CltuGetParameter-parClcwGlobalVcId contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: ClcwGvcId;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_ClcwGvcId(sequence[1]);
    return new CltuGetParameter_parClcwGlobalVcId(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_CltuGetParameter_parClcwGlobalVcId(el);
}

let _cached_encoder_for_CltuGetParameter_parClcwGlobalVcId: $.ASN1Encoder<CltuGetParameter_parClcwGlobalVcId> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parClcwGlobalVcId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parClcwGlobalVcId, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parClcwGlobalVcId (value: CltuGetParameter_parClcwGlobalVcId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parClcwGlobalVcId) { _cached_encoder_for_CltuGetParameter_parClcwGlobalVcId = function (value: CltuGetParameter_parClcwGlobalVcId, _elGetter: $.ASN1Encoder<CltuGetParameter_parClcwGlobalVcId>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_ClcwGvcId(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuGetParameter_parClcwGlobalVcId(value, elGetter);
}


/* eslint-enable */
