/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    MTAName,
    _decode_MTAName,
    _encode_MTAName,
} from '../MTSAbstractService/MTAName.ta.mjs';
import {
    ResponderCredentials,
    _decode_ResponderCredentials,
    _encode_ResponderCredentials,
} from '../MTSAbstractService/ResponderCredentials.ta.mjs';
/**
 * @summary MTABindResult_authenticated
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTABindResult-authenticated ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class MTABindResult_authenticated {
    constructor(
        /**
         * @summary `responder_name`.
         * @public
         * @readonly
         */
        readonly responder_name: MTAName,
        /**
         * @summary `responder_credentials`.
         * @public
         * @readonly
         */
        readonly responder_credentials: ResponderCredentials
    ) {}

    /**
     * @summary Restructures an object into a MTABindResult_authenticated
     * @description
     *
     * This takes an `object` and converts it to a `MTABindResult_authenticated`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MTABindResult_authenticated`.
     * @returns {MTABindResult_authenticated}
     */
    public static _from_object(
        _o: {
            [_K in keyof MTABindResult_authenticated]: MTABindResult_authenticated[_K];
        }
    ): MTABindResult_authenticated {
        return new MTABindResult_authenticated(
            _o.responder_name,
            _o.responder_credentials
        );
    }
}

/**
 * @summary The Leading Root Component Types of MTABindResult_authenticated
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MTABindResult_authenticated: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'responder-name',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'responder-credentials',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of MTABindResult_authenticated
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MTABindResult_authenticated: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MTABindResult_authenticated
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MTABindResult_authenticated: $.ComponentSpec[] = [];

let _cached_decoder_for_MTABindResult_authenticated: $.ASN1Decoder<MTABindResult_authenticated> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MTABindResult_authenticated
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MTABindResult_authenticated} The decoded data structure.
 */
export function _decode_MTABindResult_authenticated(el: _Element) {
    if (!_cached_decoder_for_MTABindResult_authenticated) {
        _cached_decoder_for_MTABindResult_authenticated = function (
            el: _Element
        ): MTABindResult_authenticated {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let responder_name!: MTAName;
            let responder_credentials!: ResponderCredentials;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'responder-name': (_el: _Element): void => {
                    responder_name = $._decode_implicit<MTAName>(
                        () => _decode_MTAName
                    )(_el);
                },
                'responder-credentials': (_el: _Element): void => {
                    responder_credentials = $._decode_explicit<ResponderCredentials>(
                        () => _decode_ResponderCredentials
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MTABindResult_authenticated,
                _extension_additions_list_spec_for_MTABindResult_authenticated,
                _root_component_type_list_2_spec_for_MTABindResult_authenticated,
                undefined
            );
            return new MTABindResult_authenticated /* SET_CONSTRUCTOR_CALL */(
                responder_name,
                responder_credentials
            );
        };
    }
    return _cached_decoder_for_MTABindResult_authenticated(el);
}

let _cached_encoder_for_MTABindResult_authenticated: $.ASN1Encoder<MTABindResult_authenticated> | null = null;

/**
 * @summary Encodes a(n) MTABindResult_authenticated into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTABindResult_authenticated, encoded as an ASN.1 Element.
 */
export function _encode_MTABindResult_authenticated(
    value: MTABindResult_authenticated,
    elGetter: $.ASN1Encoder<MTABindResult_authenticated>
) {
    if (!_cached_encoder_for_MTABindResult_authenticated) {
        _cached_encoder_for_MTABindResult_authenticated = function (
            value: MTABindResult_authenticated        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_MTAName,
                            $.BER
                        )(value.responder_name, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_ResponderCredentials,
                            $.BER
                        )(value.responder_credentials, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MTABindResult_authenticated(value, elGetter);
}


/* eslint-enable */
