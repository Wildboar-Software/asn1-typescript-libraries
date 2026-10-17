/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ParameterName, _encode_ParameterName, ParameterName,
    ParameterName_rfAvailableRequired
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { _decode_FspGetParameter_parRfAvailableRequired_parameterValue, _encode_FspGetParameter_parRfAvailableRequired_parameterValue, FspGetParameter_parRfAvailableRequired_parameterValue } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parRfAvailableRequired-parameterValue.ta.mjs";



/**
 * @summary FspGetParameter_parRfAvailableRequired
 * @description
 * 
 * rf-available-required: when the value is yes, the CLCW No RF Available flag
 * must be false before the provider may set production-status to operational.
 * Service management sets it for the physical channel.
 * 
 * Table 3-11 defines yes. It does not further define no.
 * 
 * CCSDS 912.3-B-3, table 3-11 and section 3.1.9.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parRfAvailableRequired ::= SEQUENCE
 *    {  parameterName        ParameterName  (rfAvailableRequired)
 *    ,  parameterValue       INTEGER
 *       {  yes                        (0)
 *       ,  no                         (1)
 *       }
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parRfAvailableRequired {
    /**
     * @summary `parameterName`.
     * @description
     * Fixed to `rfAvailableRequired`, selecting rf-available-required in table
     * 3-11. CCSDS 912.3-B-3, section 3.10.2.5.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * yes (0) requires the CLCW No RF Available flag to be false before
     * production-status becomes operational. Table 3-11 does not further define
     * no (1). CCSDS 912.3-B-3, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: FspGetParameter_parRfAvailableRequired_parameterValue;

    constructor (
        parameterName: ParameterName,
        parameterValue: FspGetParameter_parRfAvailableRequired_parameterValue
    ) {
        if (parameterName !== ParameterName_rfAvailableRequired) {
            throw new ASN1Error("FspGetParameter_parRfAvailableRequired.parameterName violates ParameterName (rfAvailableRequired)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parRfAvailableRequired
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parRfAvailableRequired`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parRfAvailableRequired`.
     * @returns {FspGetParameter_parRfAvailableRequired}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parRfAvailableRequired)]: (FspGetParameter_parRfAvailableRequired)[_K] }): FspGetParameter_parRfAvailableRequired {
        return new FspGetParameter_parRfAvailableRequired(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parRfAvailableRequired
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parRfAvailableRequired: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parRfAvailableRequired
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parRfAvailableRequired: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parRfAvailableRequired
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parRfAvailableRequired: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parRfAvailableRequired: $.ASN1Decoder<FspGetParameter_parRfAvailableRequired> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parRfAvailableRequired
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parRfAvailableRequired (el: _Element): FspGetParameter_parRfAvailableRequired {
    if (!_cached_decoder_for_FspGetParameter_parRfAvailableRequired) { _cached_decoder_for_FspGetParameter_parRfAvailableRequired = function (el: _Element): FspGetParameter_parRfAvailableRequired {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parRfAvailableRequired contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: FspGetParameter_parRfAvailableRequired_parameterValue;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_FspGetParameter_parRfAvailableRequired_parameterValue(sequence[1]);
    return new FspGetParameter_parRfAvailableRequired(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parRfAvailableRequired(el);
}

let _cached_encoder_for_FspGetParameter_parRfAvailableRequired: $.ASN1Encoder<FspGetParameter_parRfAvailableRequired> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parRfAvailableRequired into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parRfAvailableRequired, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parRfAvailableRequired (value: FspGetParameter_parRfAvailableRequired, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parRfAvailableRequired) { _cached_encoder_for_FspGetParameter_parRfAvailableRequired = function (value: FspGetParameter_parRfAvailableRequired, _elGetter: $.ASN1Encoder<FspGetParameter_parRfAvailableRequired>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_FspGetParameter_parRfAvailableRequired_parameterValue(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parRfAvailableRequired(value, elGetter);
}


/* eslint-enable */
