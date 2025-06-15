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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    PersonNumber,
    _decode_PersonNumber,
    _encode_PersonNumber,
} from '../X790ASN1Module/PersonNumber.ta.mjs';
import {
    PersonName,
    _decode_PersonName,
    _encode_PersonName,
} from '../X790ASN1Module/PersonName.ta.mjs';
import {
    PersonPhone,
    _decode_PersonPhone,
    _encode_PersonPhone,
} from '../X790ASN1Module/PersonPhone.ta.mjs';
import {
    PersonLocation,
    _decode_PersonLocation,
    _encode_PersonLocation,
} from '../X790ASN1Module/PersonLocation.ta.mjs';
import {
    PersonEmail,
    _decode_PersonEmail,
    _encode_PersonEmail,
} from '../X790ASN1Module/PersonEmail.ta.mjs';
import {
    PersonFax,
    _decode_PersonFax,
    _encode_PersonFax,
} from '../X790ASN1Module/PersonFax.ta.mjs';
import {
    PersonRespon,
    _decode_PersonRespon,
    _encode_PersonRespon,
} from '../X790ASN1Module/PersonRespon.ta.mjs';

/**
 * @summary PersonReach
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PersonReach ::= SEQUENCE {
 *   number  [0]  PersonNumber DEFAULT "",
 *   name    [1]  PersonName DEFAULT "",
 *   phone   [2]  PersonPhone OPTIONAL,
 *   loc     [3]  PersonLocation OPTIONAL,
 *   email   [4]  PersonEmail OPTIONAL,
 *   fax     [5]  PersonFax OPTIONAL,
 *   respon  [6]  PersonRespon OPTIONAL,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class PersonReach {
    constructor(
        /**
         * @summary `number_`.
         * @public
         * @readonly
         */
        readonly number_: OPTIONAL<PersonNumber>,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<PersonName>,
        /**
         * @summary `phone`.
         * @public
         * @readonly
         */
        readonly phone: OPTIONAL<PersonPhone>,
        /**
         * @summary `loc`.
         * @public
         * @readonly
         */
        readonly loc: OPTIONAL<PersonLocation>,
        /**
         * @summary `email`.
         * @public
         * @readonly
         */
        readonly email: OPTIONAL<PersonEmail>,
        /**
         * @summary `fax`.
         * @public
         * @readonly
         */
        readonly fax: OPTIONAL<PersonFax>,
        /**
         * @summary `respon`.
         * @public
         * @readonly
         */
        readonly respon: OPTIONAL<PersonRespon>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PersonReach
     * @description
     *
     * This takes an `object` and converts it to a `PersonReach`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PersonReach`.
     * @returns {PersonReach}
     */
    public static _from_object(
        _o: { [_K in keyof PersonReach]: PersonReach[_K] }
    ): PersonReach {
        return new PersonReach(
            _o.number_,
            _o.name,
            _o.phone,
            _o.loc,
            _o.email,
            _o.fax,
            _o.respon,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `number_`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_number_() {
        return '';
    }
    /**
     * @summary Getter that returns the default value for `name`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_name() {
        return '';
    }
}


/**
 * @summary The Leading Root Component Types of PersonReach
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PersonReach: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'number',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'name',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'phone',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'loc',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'email',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'fax',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'respon',
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
];


/**
 * @summary The Trailing Root Component Types of PersonReach
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PersonReach: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PersonReach
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PersonReach: $.ComponentSpec[] = [];


let _cached_decoder_for_PersonReach: $.ASN1Decoder<PersonReach> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PersonReach
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PersonReach} The decoded data structure.
 */
export function _decode_PersonReach(el: _Element) {
    if (!_cached_decoder_for_PersonReach) {
        _cached_decoder_for_PersonReach = function (el: _Element): PersonReach {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let number_: OPTIONAL<PersonNumber> =
                PersonReach._default_value_for_number_;
            let name: OPTIONAL<PersonName> =
                PersonReach._default_value_for_name;
            let phone: OPTIONAL<PersonPhone>;
            let loc: OPTIONAL<PersonLocation>;
            let email: OPTIONAL<PersonEmail>;
            let fax: OPTIONAL<PersonFax>;
            let respon: OPTIONAL<PersonRespon>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                number: (_el: _Element): void => {
                    number_ = $._decode_implicit<PersonNumber>(
                        () => _decode_PersonNumber
                    )(_el);
                },
                name: (_el: _Element): void => {
                    name = $._decode_implicit<PersonName>(
                        () => _decode_PersonName
                    )(_el);
                },
                phone: (_el: _Element): void => {
                    phone = $._decode_implicit<PersonPhone>(
                        () => _decode_PersonPhone
                    )(_el);
                },
                loc: (_el: _Element): void => {
                    loc = $._decode_implicit<PersonLocation>(
                        () => _decode_PersonLocation
                    )(_el);
                },
                email: (_el: _Element): void => {
                    email = $._decode_implicit<PersonEmail>(
                        () => _decode_PersonEmail
                    )(_el);
                },
                fax: (_el: _Element): void => {
                    fax = $._decode_implicit<PersonFax>(
                        () => _decode_PersonFax
                    )(_el);
                },
                respon: (_el: _Element): void => {
                    respon = $._decode_implicit<PersonRespon>(
                        () => _decode_PersonRespon
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PersonReach,
                _extension_additions_list_spec_for_PersonReach,
                _root_component_type_list_2_spec_for_PersonReach,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PersonReach /* SEQUENCE_CONSTRUCTOR_CALL */(
                number_,
                name,
                phone,
                loc,
                email,
                fax,
                respon,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PersonReach(el);
}


let _cached_encoder_for_PersonReach: $.ASN1Encoder<PersonReach> | null = null;


/**
 * @summary Encodes a(n) PersonReach into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PersonReach, encoded as an ASN.1 Element.
 */
export function _encode_PersonReach(
    value: PersonReach,
    elGetter: $.ASN1Encoder<PersonReach>
) {
    if (!_cached_encoder_for_PersonReach) {
        _cached_encoder_for_PersonReach = function (
            value: PersonReach        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.number_ === undefined ||
                            $.deepEq(
                                value.number_,
                                PersonReach._default_value_for_number_
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_PersonNumber,
                                      $.BER
                                  )(value.number_, $.BER),
                            /* IF_DEFAULT */ value.name === undefined ||
                            $.deepEq(
                                value.name,
                                PersonReach._default_value_for_name
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_PersonName,
                                      $.BER
                                  )(value.name, $.BER),
                            /* IF_ABSENT  */ value.phone === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_PersonPhone,
                                      $.BER
                                  )(value.phone, $.BER),
                            /* IF_ABSENT  */ value.loc === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_PersonLocation,
                                      $.BER
                                  )(value.loc, $.BER),
                            /* IF_ABSENT  */ value.email === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_PersonEmail,
                                      $.BER
                                  )(value.email, $.BER),
                            /* IF_ABSENT  */ value.fax === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      5,
                                      () => _encode_PersonFax,
                                      $.BER
                                  )(value.fax, $.BER),
                            /* IF_ABSENT  */ value.respon === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      6,
                                      () => _encode_PersonRespon,
                                      $.BER
                                  )(value.respon, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PersonReach(value, elGetter);
}


/* eslint-enable */
