/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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


/**
 * @summary Read_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Read-Request ::= SEQUENCE {
 *    specificationWithResult       [0] IMPLICIT BOOLEAN DEFAULT FALSE,
 *    variableAccessSpecification   [1] VariableAccessSpecification  }
 * ```
 * 
 * @class
 */
export
class Read_Request {
    constructor (
        /**
         * @summary `specificationWithResult`.
         * @public
         * @readonly
         */
        readonly specificationWithResult: OPTIONAL<BOOLEAN>,
        /**
         * @summary `variableAccessSpecification`.
         * @public
         * @readonly
         */
        readonly variableAccessSpecification: VariableAccessSpecification
    ) {}

    /**
     * @summary Restructures an object into a Read_Request
     * @description
     * 
     * This takes an `object` and converts it to a `Read_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Read_Request`.
     * @returns {Read_Request}
     */
    public static _from_object (_o: { [_K in keyof (Read_Request)]: (Read_Request)[_K] }): Read_Request {
        return new Read_Request(_o.specificationWithResult, _o.variableAccessSpecification);
    }

    /**
     * @summary Getter that returns the default value for `specificationWithResult`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_specificationWithResult () { return false; }
}

/**
 * @summary The Leading Root Component Types of Read_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Read_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("specificationWithResult", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("variableAccessSpecification", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Read_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Read_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Read_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Read_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Read_Request: $.ASN1Decoder<Read_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Read_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Read_Request (el: _Element): Read_Request {
    if (!_cached_decoder_for_Read_Request) { _cached_decoder_for_Read_Request = function (el: _Element): Read_Request {
    let specificationWithResult: OPTIONAL<BOOLEAN> = Read_Request._default_value_for_specificationWithResult;
    let variableAccessSpecification!: VariableAccessSpecification;
    const callbacks: $.DecodingMap = {
        "specificationWithResult": (_el: _Element): void => { specificationWithResult = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "variableAccessSpecification": (_el: _Element): void => { variableAccessSpecification = $._decode_explicit<VariableAccessSpecification>(() => _decode_VariableAccessSpecification)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Read_Request,
        _extension_additions_list_spec_for_Read_Request,
        _root_component_type_list_2_spec_for_Read_Request,
        undefined,
    );
    return new Read_Request(
        specificationWithResult,
        variableAccessSpecification
    );
}; }
    return _cached_decoder_for_Read_Request(el);
}

let _cached_encoder_for_Read_Request: $.ASN1Encoder<Read_Request> | null = null;

/**
 * @summary Encodes a(n) Read_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Read_Request, encoded as an ASN.1 Element.
 */
export
function _encode_Read_Request (value: Read_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Read_Request) { _cached_encoder_for_Read_Request = function (value: Read_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.specificationWithResult === undefined || $.deepEq(value.specificationWithResult, Read_Request._default_value_for_specificationWithResult) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.specificationWithResult, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_VariableAccessSpecification, $.BER)(value.variableAccessSpecification, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Read_Request(value, elGetter);
}


/* eslint-enable */
