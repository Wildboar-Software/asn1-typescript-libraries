/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UDMInvalidParameters, _decode_UDMInvalidParameters, _encode_UDMInvalidParameters } from "../TS33128Payloads/UDMInvalidParameters.ta.mjs";
// export { UDMInvalidParameters, _decode_UDMInvalidParameters, _encode_UDMInvalidParameters } from "../TS33128Payloads/UDMInvalidParameters.ta.mjs";


/**
 * @summary UDMProblemDetailsOtherCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMProblemDetailsOtherCause ::= SEQUENCE
 * {
 *     problemDetailsType   [1] UTF8String OPTIONAL,
 *     title                [2] UTF8String OPTIONAL,
 *     status               [3] INTEGER OPTIONAL,
 *     detail               [4] UTF8String OPTIONAL,
 *     instance             [5] UTF8String OPTIONAL,
 *     cause                [6] UTF8String OPTIONAL,
 *     uDMInvalidParameters [7] UDMInvalidParameters,
 *     uDMSupportedFeatures [8] UTF8String
 * }
 * ```
 * 
 * @class
 */
export
class UDMProblemDetailsOtherCause {
    constructor (
        /**
         * @summary `problemDetailsType`.
         * @public
         * @readonly
         */
        readonly problemDetailsType: OPTIONAL<UTF8String>,
        /**
         * @summary `title`.
         * @public
         * @readonly
         */
        readonly title: OPTIONAL<UTF8String>,
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: OPTIONAL<INTEGER>,
        /**
         * @summary `detail`.
         * @public
         * @readonly
         */
        readonly detail: OPTIONAL<UTF8String>,
        /**
         * @summary `instance`.
         * @public
         * @readonly
         */
        readonly instance: OPTIONAL<UTF8String>,
        /**
         * @summary `cause`.
         * @public
         * @readonly
         */
        readonly cause: OPTIONAL<UTF8String>,
        /**
         * @summary `uDMInvalidParameters`.
         * @public
         * @readonly
         */
        readonly uDMInvalidParameters: UDMInvalidParameters,
        /**
         * @summary `uDMSupportedFeatures`.
         * @public
         * @readonly
         */
        readonly uDMSupportedFeatures: UTF8String
    ) {}

    /**
     * @summary Restructures an object into a UDMProblemDetailsOtherCause
     * @description
     * 
     * This takes an `object` and converts it to a `UDMProblemDetailsOtherCause`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UDMProblemDetailsOtherCause`.
     * @returns {UDMProblemDetailsOtherCause}
     */
    public static _from_object (_o: { [_K in keyof (UDMProblemDetailsOtherCause)]: (UDMProblemDetailsOtherCause)[_K] }): UDMProblemDetailsOtherCause {
        return new UDMProblemDetailsOtherCause(_o.problemDetailsType, _o.title, _o.status, _o.detail, _o.instance, _o.cause, _o.uDMInvalidParameters, _o.uDMSupportedFeatures);
    }


}

/**
 * @summary The Leading Root Component Types of UDMProblemDetailsOtherCause
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UDMProblemDetailsOtherCause: $.ComponentSpec[] = [
    new $.ComponentSpec("problemDetailsType", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("title", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("status", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("detail", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("instance", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("uDMInvalidParameters", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("uDMSupportedFeatures", false, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of UDMProblemDetailsOtherCause
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UDMProblemDetailsOtherCause: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UDMProblemDetailsOtherCause
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UDMProblemDetailsOtherCause: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UDMProblemDetailsOtherCause: $.ASN1Decoder<UDMProblemDetailsOtherCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMProblemDetailsOtherCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMProblemDetailsOtherCause (el: _Element): UDMProblemDetailsOtherCause {
    if (!_cached_decoder_for_UDMProblemDetailsOtherCause) { _cached_decoder_for_UDMProblemDetailsOtherCause = function (el: _Element): UDMProblemDetailsOtherCause {
    let problemDetailsType: OPTIONAL<UTF8String>;
    let title: OPTIONAL<UTF8String>;
    let status: OPTIONAL<INTEGER>;
    let detail: OPTIONAL<UTF8String>;
    let instance: OPTIONAL<UTF8String>;
    let cause: OPTIONAL<UTF8String>;
    let uDMInvalidParameters!: UDMInvalidParameters;
    let uDMSupportedFeatures!: UTF8String;
    const callbacks: $.DecodingMap = {
        "problemDetailsType": (_el: _Element): void => { problemDetailsType = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "title": (_el: _Element): void => { title = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "status": (_el: _Element): void => { status = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "detail": (_el: _Element): void => { detail = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "instance": (_el: _Element): void => { instance = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "cause": (_el: _Element): void => { cause = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "uDMInvalidParameters": (_el: _Element): void => { uDMInvalidParameters = $._decode_implicit<UDMInvalidParameters>(() => _decode_UDMInvalidParameters)(_el); },
        "uDMSupportedFeatures": (_el: _Element): void => { uDMSupportedFeatures = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UDMProblemDetailsOtherCause,
        _extension_additions_list_spec_for_UDMProblemDetailsOtherCause,
        _root_component_type_list_2_spec_for_UDMProblemDetailsOtherCause,
        undefined,
    );
    return new UDMProblemDetailsOtherCause(
        problemDetailsType,
        title,
        status,
        detail,
        instance,
        cause,
        uDMInvalidParameters,
        uDMSupportedFeatures
    );
}; }
    return _cached_decoder_for_UDMProblemDetailsOtherCause(el);
}

let _cached_encoder_for_UDMProblemDetailsOtherCause: $.ASN1Encoder<UDMProblemDetailsOtherCause> | null = null;

/**
 * @summary Encodes a(n) UDMProblemDetailsOtherCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMProblemDetailsOtherCause, encoded as an ASN.1 Element.
 */
export
function _encode_UDMProblemDetailsOtherCause (value: UDMProblemDetailsOtherCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMProblemDetailsOtherCause) { _cached_encoder_for_UDMProblemDetailsOtherCause = function (value: UDMProblemDetailsOtherCause, elGetter: $.ASN1Encoder<UDMProblemDetailsOtherCause>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.problemDetailsType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.problemDetailsType, $.BER)),
            /* IF_ABSENT  */ ((value.title === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.title, $.BER)),
            /* IF_ABSENT  */ ((value.status === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.status, $.BER)),
            /* IF_ABSENT  */ ((value.detail === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeUTF8String, $.BER)(value.detail, $.BER)),
            /* IF_ABSENT  */ ((value.instance === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.instance, $.BER)),
            /* IF_ABSENT  */ ((value.cause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.cause, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_UDMInvalidParameters, $.BER)(value.uDMInvalidParameters, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeUTF8String, $.BER)(value.uDMSupportedFeatures, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UDMProblemDetailsOtherCause(value, elGetter);
}


/* eslint-enable */
