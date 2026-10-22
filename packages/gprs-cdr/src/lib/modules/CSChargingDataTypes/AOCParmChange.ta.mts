/* eslint-disable */
import {
    OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AOCParameters, _decode_AOCParameters, _encode_AOCParameters } from "../CSChargingDataTypes/AOCParameters.ta.mjs";


/**
 * @summary AOCParmChange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AOCParmChange ::= SEQUENCE {
 *    changeTime      [0] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    newParameters   [1] IMPLICIT AOCParameters}
 * ```
 * 
 * @class
 */
export
class AOCParmChange {
    /**
     * @summary `changeTime`.
     * @public
     * @readonly
     */
    readonly changeTime: OCTET_STRING;
    /**
     * @summary `newParameters`.
     * @public
     * @readonly
     */
    readonly newParameters: AOCParameters;

    constructor (
        changeTime: OCTET_STRING,
        newParameters: AOCParameters
    ) {
        this.changeTime = changeTime;
        this.newParameters = newParameters;
    
        if ((this.changeTime.length !== 9)) {
            throw new ASN1SizeError("AOCParmChange.changeTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a AOCParmChange
     * @description
     * 
     * This takes an `object` and converts it to a `AOCParmChange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AOCParmChange`.
     * @returns {AOCParmChange}
     */
    public static _from_object (_o: { [_K in keyof (AOCParmChange)]: (AOCParmChange)[_K] }): AOCParmChange {
        return new AOCParmChange(_o.changeTime, _o.newParameters);
    }


}

/**
 * @summary The Leading Root Component Types of AOCParmChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AOCParmChange: $.ComponentSpec[] = [
    new $.ComponentSpec("changeTime", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("newParameters", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AOCParmChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AOCParmChange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AOCParmChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AOCParmChange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AOCParmChange: $.ASN1Decoder<AOCParmChange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AOCParmChange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AOCParmChange (el: _Element): AOCParmChange {
    if (!_cached_decoder_for_AOCParmChange) { _cached_decoder_for_AOCParmChange = function (el: _Element): AOCParmChange {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AOCParmChange contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "changeTime";
    sequence[1].name = "newParameters";
    const changeTime: OCTET_STRING = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    const newParameters: AOCParameters = $._decode_implicit<AOCParameters>(() => _decode_AOCParameters)(sequence[1]);
    return new AOCParmChange(
        changeTime,
        newParameters,

    );
}; }
    return _cached_decoder_for_AOCParmChange(el);
}

let _cached_encoder_for_AOCParmChange: $.ASN1Encoder<AOCParmChange> | null = null;

/**
 * @summary Encodes a(n) AOCParmChange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AOCParmChange, encoded as an ASN.1 Element.
 */
export
function _encode_AOCParmChange (value: AOCParmChange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AOCParmChange) { _cached_encoder_for_AOCParmChange = function (value: AOCParmChange, _elGetter: $.ASN1Encoder<AOCParmChange>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.changeTime, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AOCParameters, $.BER)(value.newParameters, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_AOCParmChange(value, elGetter);
}


/* eslint-enable */
