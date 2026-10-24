/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    type OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SessionParams
 * @description
 *
 * Limits of a registration session (ECMA-282 §6.3.1). On `pumRegistr` they are
 * the maximum duration and the maximum number of outgoing calls. On
 * `pumInterrog`, the same elements report time left and outgoing calls left,
 * taken from the Visitor PINX (§6.7.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SessionParams ::= SEQUENCE {
 *     durationOfSession [1] IMPLICIT INTEGER OPTIONAL,
 *     -- Duration of session in seconds,
 *     -- default if omitted: duration of session unlimited.
 *     numberOfOutgCalls [2] IMPLICIT INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SessionParams {
    /**
     * @summary `durationOfSession`.
     * @description
     *
     * Duration of the session in seconds. Omission means the duration is
     * unlimited (§6.3.1). In an interrogation result, time left in the session.
     *
     * @public
     * @readonly
     */
    readonly durationOfSession: OPTIONAL<INTEGER>;
    /**
     * @summary `numberOfOutgCalls`.
     * @description
     *
     * Maximum number of outgoing calls, for OutCall or AllCall. Omission means
     * the number is unlimited (§6.3.1). In an interrogation result, outgoing
     * calls left.
     *
     * @public
     * @readonly
     */
    readonly numberOfOutgCalls: OPTIONAL<INTEGER>;

    constructor (
        durationOfSession?: OPTIONAL<INTEGER>,
        numberOfOutgCalls?: OPTIONAL<INTEGER>
    ) {
        this.durationOfSession = durationOfSession;
        this.numberOfOutgCalls = numberOfOutgCalls;
    }

    /**
     * @summary Restructures an object into a SessionParams
     * @description
     * 
     * This takes an `object` and converts it to a `SessionParams`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SessionParams`.
     * @returns {SessionParams}
     */
    public static _from_object (_o: { [_K in keyof (SessionParams)]: (SessionParams)[_K] }): SessionParams {
        return new SessionParams(_o.durationOfSession, _o.numberOfOutgCalls);
    }

}

/**
 * @summary The Leading Root Component Types of SessionParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SessionParams: $.ComponentSpec[] = [
    new $.ComponentSpec("durationOfSession", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("numberOfOutgCalls", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SessionParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SessionParams: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SessionParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SessionParams: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SessionParams: $.ASN1Decoder<SessionParams> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SessionParams
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SessionParams (el: _Element): SessionParams {
    if (!_cached_decoder_for_SessionParams) { _cached_decoder_for_SessionParams = function (el: _Element): SessionParams {
    let durationOfSession: OPTIONAL<INTEGER>;
    let numberOfOutgCalls: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "durationOfSession": (_el: _Element): void => { durationOfSession = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "numberOfOutgCalls": (_el: _Element): void => { numberOfOutgCalls = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SessionParams,
        _extension_additions_list_spec_for_SessionParams,
        _root_component_type_list_2_spec_for_SessionParams,
        undefined,
    );
    return new SessionParams(
        durationOfSession,
        numberOfOutgCalls
    );
}; }
    return _cached_decoder_for_SessionParams(el);
}

let _cached_encoder_for_SessionParams: $.ASN1Encoder<SessionParams> | null = null;

/**
 * @summary Encodes a(n) SessionParams into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SessionParams, encoded as an ASN.1 Element.
 */
export
function _encode_SessionParams (value: SessionParams, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SessionParams) { _cached_encoder_for_SessionParams = function (value: SessionParams, _elGetter: $.ASN1Encoder<SessionParams>): _Element {
    const _components: _Element[] = [];
    if (value.durationOfSession !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.durationOfSession, $.BER));
    }
    if (value.numberOfOutgCalls !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.numberOfOutgCalls, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SessionParams(value, elGetter);
}

/* eslint-enable */
