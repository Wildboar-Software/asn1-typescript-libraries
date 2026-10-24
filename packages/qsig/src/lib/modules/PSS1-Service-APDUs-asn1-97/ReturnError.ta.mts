/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../PSS1-Service-APDUs-asn1-97/InvokeId.ta.mjs";

/**
 * @summary ReturnError
 * @description
 *
 * Failure of an outstanding invoke, using an error that operation declares
 * (ECMA-165 §6.4, §11.3.3.4). The error values come from the supplementary
 * service. General-Error-List supplies the errors shared across services.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReturnError { ERROR: Errors } ::= SEQUENCE {
 *     invokeId InvokeId
 *         (
 *             CONSTRAINED BY {
 *                 -- must be that for an outstanding operation --
 *             }
 *             ! RejectProblem: returnError-unrecognisedInvocation
 *         )
 *         (
 *             CONSTRAINED BY {
 *                 -- which returns an error --
 *             }
 *             ! RejectProblem: returnError-errorResponseUnexpected
 *         ),
 *     errcode ERROR.&errorCode ({Errors} ! RejectProblem: returnError-unrecognisedError)
 *         (
 *             CONSTRAINED BY {
 *                 --must be in the &Errors field of the associated operation --
 *             }
 *             ! RejectProblem: returnError-unexpectedError
 *         ),
 *     parameter ERROR.&ParameterType
 *         (
 *             {Errors} {@errcode}
 *             ! RejectProblem: returnError-mistypedParameter
 *         ) OPTIONAL
 * }
 *     (
 *         CONSTRAINED BY {
 *             -- must conform to the above definition --
 *         }
 *         ! RejectProblem: general-mistypedPDU
 *     )
 * ```
 * 
 * @class
 */
export
class ReturnError {
    /**
     * @summary `invokeId`.
     * @description
     *
     * Identifier of the outstanding invoke. Rejected as
     * `unrecognisedInvocation` if none is in progress, or as
     * `errorResponseUnexpected` if that operation does not report failure
     * (ECMA-165 Annex G).
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `errcode`.
     * @description
     *
     * Error being reported. It must be one of the Errors in scope and one that
     * the invoked operation may report; otherwise `unrecognisedError` or
     * `unexpectedError` (ECMA-165 Annex G).
     * @public
     * @readonly
     */
    readonly errcode: Code;
    /**
     * @summary `parameter`.
     * @description
     *
     * Parameter of `errcode`, when that error has one. The wrong type is
     * `mistypedParameter` (ECMA-165 Annex G).
     * @public
     * @readonly
     */
    readonly parameter: OPTIONAL<_Element>;

    constructor (
        invokeId: InvokeId,
        errcode: Code,
        parameter?: OPTIONAL<_Element>
    ) {
        this.invokeId = invokeId;
        this.errcode = errcode;
        this.parameter = parameter;
    }

    /**
     * @summary Restructures an object into a ReturnError
     * @description
     * 
     * This takes an `object` and converts it to a `ReturnError`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReturnError`.
     * @returns {ReturnError}
     */
    public static _from_object (_o: { [_K in keyof (ReturnError)]: (ReturnError)[_K] }): ReturnError {
        return new ReturnError(_o.invokeId, _o.errcode, _o.parameter);
    }

}

/**
 * @summary The Leading Root Component Types of ReturnError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReturnError: $.ComponentSpec[] = [
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("errcode", false, $.hasAnyTag),
    new $.ComponentSpec("parameter", true, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of ReturnError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReturnError: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReturnError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReturnError: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReturnError: $.ASN1Decoder<ReturnError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReturnError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReturnError (el: _Element): ReturnError {
    if (!_cached_decoder_for_ReturnError) { _cached_decoder_for_ReturnError = function (el: _Element): ReturnError {
    let invokeId!: InvokeId;
    let errcode!: Code;
    let parameter: OPTIONAL<_Element>;
    const callbacks: $.DecodingMap = {
        "invokeId": (_el: _Element): void => { invokeId = _decode_InvokeId(_el); },
        "errcode": (_el: _Element): void => { errcode = _decode_Code(_el); },
        "parameter": (_el: _Element): void => { parameter = $._decodeAny(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReturnError,
        _extension_additions_list_spec_for_ReturnError,
        _root_component_type_list_2_spec_for_ReturnError,
        undefined,
    );
    return new ReturnError(
        invokeId,
        errcode,
        parameter
    );
}; }
    return _cached_decoder_for_ReturnError(el);
}

let _cached_encoder_for_ReturnError: $.ASN1Encoder<ReturnError> | null = null;

/**
 * @summary Encodes a(n) ReturnError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReturnError, encoded as an ASN.1 Element.
 */
export
function _encode_ReturnError (value: ReturnError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReturnError) { _cached_encoder_for_ReturnError = function (value: ReturnError, _elGetter: $.ASN1Encoder<ReturnError>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER));
    _components.push(/* REQUIRED   */ _encode_Code(value.errcode, $.BER));
    if (value.parameter !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeAny(value.parameter, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ReturnError(value, elGetter);
}

/* eslint-enable */
