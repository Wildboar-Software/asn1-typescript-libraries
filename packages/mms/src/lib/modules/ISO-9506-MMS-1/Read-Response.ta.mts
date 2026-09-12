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
import { VariableAccessSpecification, _decode_VariableAccessSpecification, _encode_VariableAccessSpecification } from "../ISO-9506-MMS-1/VariableAccessSpecification.ta.mjs";
// export { VariableAccessSpecification, _decode_VariableAccessSpecification, _encode_VariableAccessSpecification } from "../ISO-9506-MMS-1/VariableAccessSpecification.ta.mjs";
import { AccessResult, _decode_AccessResult, _encode_AccessResult } from "../ISO-9506-MMS-1/AccessResult.ta.mjs";
// export { AccessResult, _decode_AccessResult, _encode_AccessResult } from "../ISO-9506-MMS-1/AccessResult.ta.mjs";


/**
 * @summary Read_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Read-Response ::= SEQUENCE {
 *    variableAccessSpecification   [0] VariableAccessSpecification OPTIONAL,
 *    listOfAccessResult            [1] IMPLICIT SEQUENCE OF AccessResult   }
 * ```
 * 
 * @class
 */
export
class Read_Response {
    constructor (
        /**
         * @summary `variableAccessSpecification`.
         * @public
         * @readonly
         */
        readonly variableAccessSpecification: OPTIONAL<VariableAccessSpecification>,
        /**
         * @summary `listOfAccessResult`.
         * @public
         * @readonly
         */
        readonly listOfAccessResult: AccessResult[]
    ) {}

    /**
     * @summary Restructures an object into a Read_Response
     * @description
     * 
     * This takes an `object` and converts it to a `Read_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Read_Response`.
     * @returns {Read_Response}
     */
    public static _from_object (_o: { [_K in keyof (Read_Response)]: (Read_Response)[_K] }): Read_Response {
        return new Read_Response(_o.variableAccessSpecification, _o.listOfAccessResult);
    }


}

/**
 * @summary The Leading Root Component Types of Read_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Read_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("variableAccessSpecification", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("listOfAccessResult", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Read_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Read_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Read_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Read_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Read_Response: $.ASN1Decoder<Read_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Read_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Read_Response (el: _Element): Read_Response {
    if (!_cached_decoder_for_Read_Response) { _cached_decoder_for_Read_Response = function (el: _Element): Read_Response {
    let variableAccessSpecification: OPTIONAL<VariableAccessSpecification>;
    let listOfAccessResult!: AccessResult[];
    const callbacks: $.DecodingMap = {
        "variableAccessSpecification": (_el: _Element): void => { variableAccessSpecification = $._decode_explicit<VariableAccessSpecification>(() => _decode_VariableAccessSpecification)(_el); },
        "listOfAccessResult": (_el: _Element): void => { listOfAccessResult = $._decode_implicit<AccessResult[]>(() => $._decodeSequenceOf<AccessResult>(() => _decode_AccessResult))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Read_Response,
        _extension_additions_list_spec_for_Read_Response,
        _root_component_type_list_2_spec_for_Read_Response,
        undefined,
    );
    return new Read_Response(
        variableAccessSpecification,
        listOfAccessResult
    );
}; }
    return _cached_decoder_for_Read_Response(el);
}

let _cached_encoder_for_Read_Response: $.ASN1Encoder<Read_Response> | null = null;

/**
 * @summary Encodes a(n) Read_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Read_Response, encoded as an ASN.1 Element.
 */
export
function _encode_Read_Response (value: Read_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Read_Response) { _cached_encoder_for_Read_Response = function (value: Read_Response): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.variableAccessSpecification === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_VariableAccessSpecification, $.BER)(value.variableAccessSpecification, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<AccessResult>(() => _encode_AccessResult, $.BER), $.BER)(value.listOfAccessResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Read_Response(value, elGetter);
}


/* eslint-enable */
