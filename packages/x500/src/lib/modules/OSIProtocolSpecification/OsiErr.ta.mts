/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    InvokeId,
    _decode_InvokeId,
    _encode_InvokeId,
} from "../CommonProtocolSpecification/InvokeId.ta.mjs";
/**
 * @summary OsiErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiErr{OPERATION:Operations} ::= [3] IMPLICIT SEQUENCE {
 *   invokeID  InvokeId,
 *   errcode   OPERATION.&Errors.&errorCode({Operations}),
 *   error     OPERATION.&Errors.&ParameterType({Operations}{@.errcode}) }
 * ```
 *
 * @class
 */
export class OsiErr {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeId,
        /**
         * @summary `errcode`.
         * @public
         * @readonly
         */
        readonly errcode: _Element,
        /**
         * @summary `error`.
         * @public
         * @readonly
         */
        readonly error: _Element
    ) {}

    /**
     * @summary Restructures an object into a OsiErr
     * @description
     *
     * This takes an `object` and converts it to a `OsiErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiErr`.
     * @returns {OsiErr}
     */
    public static _from_object(
        _o: { [_K in keyof OsiErr]: OsiErr[_K] }
    ): OsiErr {
        return new OsiErr(_o.invokeID, _o.errcode, _o.error);
    }
}

/**
 * @summary The Leading Root Component Types of OsiErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiErr: $.ComponentSpec[] = [
    new $.ComponentSpec("invokeID", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("errcode", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("error", false, $.hasAnyTag, undefined, undefined),
];

/**
 * @summary The Trailing Root Component Types of OsiErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiErr: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of OsiErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiErr: $.ComponentSpec[] = [];

let _cached_decoder_for_OsiErr: $.ASN1Decoder<OsiErr> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OsiErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiErr} The decoded data structure.
 */
export function _decode_OsiErr(el: _Element) {
    if (!_cached_decoder_for_OsiErr) {
        _cached_decoder_for_OsiErr = $._decode_implicit<OsiErr>(
            () =>
                function (el: _Element): OsiErr {
                    const sequence: _Element[] = el.sequence;
                    if (sequence.length < 3) {
                        throw new _ConstructionError(
                            "OsiErr contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    sequence[0].name = "invokeID";
                    sequence[1].name = "errcode";
                    sequence[2].name = "error";
                    let invokeID!: InvokeId;
                    let errcode!: _Element;
                    let error!: _Element;
                    invokeID = _decode_InvokeId(sequence[0]);
                    errcode = $._decodeAny(sequence[1]);
                    error = $._decodeAny(sequence[2]);
                    return new OsiErr(invokeID, errcode, error);
                }
        );
    }
    return _cached_decoder_for_OsiErr(el);
}

let _cached_encoder_for_OsiErr: $.ASN1Encoder<OsiErr> | null = null;

/**
 * @summary Encodes a(n) OsiErr into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiErr, encoded as an ASN.1 Element.
 */
export function _encode_OsiErr(value: OsiErr, elGetter: $.ASN1Encoder<OsiErr>) {
    if (!_cached_encoder_for_OsiErr) {
        _cached_encoder_for_OsiErr = $._encode_implicit(
            _TagClass.context,
            3,
            () =>
                function (
                    value: OsiErr                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ _encode_InvokeId(
                                    value.invokeID,
                                    $.DER
                                ),
                                /* REQUIRED   */ $._encodeAny(
                                    value.errcode,
                                    $.DER
                                ),
                                /* REQUIRED   */ $._encodeAny(
                                    value.error,
                                    $.DER
                                ),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.DER
                    );
                },
            $.DER
        );
    }
    return _cached_encoder_for_OsiErr(value, elGetter);
}


/* eslint-enable */
