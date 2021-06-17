/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
import { Scope, _decode_Scope, _encode_Scope } from '@wildboar/cmip/src/lib/modules/CMIP-1/Scope.ta';
export { Scope, _decode_Scope, _encode_Scope } from '@wildboar/cmip/src/lib/modules/CMIP-1/Scope.ta';

/* START_OF_SYMBOL_DEFINITION MITSearch */
/**
 * @summary MITSearch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MITSearch ::= SEQUENCE {
 *   base            ObjectInstance,
 *   discoveryScope  Scope,
 *   classRequest    BOOLEAN DEFAULT FALSE
 *   -- if true, include class with MITSearchResponse
 * }
 * ```
 *
 * @class
 */
export class MITSearch {
    constructor(
        /**
         * @summary `base`.
         * @public
         * @readonly
         */
        readonly base: ObjectInstance,
        /**
         * @summary `discoveryScope`.
         * @public
         * @readonly
         */
        readonly discoveryScope: Scope,
        /**
         * @summary `classRequest`.
         * @public
         * @readonly
         */
        readonly classRequest: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a MITSearch
     * @description
     *
     * This takes an `object` and converts it to a `MITSearch`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MITSearch`.
     * @returns {MITSearch}
     */
    public static _from_object(
        _o: { [_K in keyof MITSearch]: MITSearch[_K] }
    ): MITSearch {
        return new MITSearch(_o.base, _o.discoveryScope, _o.classRequest);
    }

    /**
     * @summary Getter that returns the default value for `classRequest`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_classRequest() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION MITSearch */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MITSearch */
/**
 * @summary The Leading Root Component Types of MITSearch
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MITSearch: $.ComponentSpec[] = [
    new $.ComponentSpec('base', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'discoveryScope',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'classRequest',
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MITSearch */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MITSearch */
/**
 * @summary The Trailing Root Component Types of MITSearch
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MITSearch: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MITSearch */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MITSearch */
/**
 * @summary The Extension Addition Component Types of MITSearch
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MITSearch: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MITSearch */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MITSearch */
let _cached_decoder_for_MITSearch: $.ASN1Decoder<MITSearch> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MITSearch */

/* START_OF_SYMBOL_DEFINITION _decode_MITSearch */
/**
 * @summary Decodes an ASN.1 element into a(n) MITSearch
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MITSearch} The decoded data structure.
 */
export function _decode_MITSearch(el: _Element) {
    if (!_cached_decoder_for_MITSearch) {
        _cached_decoder_for_MITSearch = function (el: _Element): MITSearch {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let base!: ObjectInstance;
            let discoveryScope!: Scope;
            let classRequest: OPTIONAL<BOOLEAN> =
                MITSearch._default_value_for_classRequest;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                base: (_el: _Element): void => {
                    base = _decode_ObjectInstance(_el);
                },
                discoveryScope: (_el: _Element): void => {
                    discoveryScope = _decode_Scope(_el);
                },
                classRequest: (_el: _Element): void => {
                    classRequest = $._decodeBoolean(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MITSearch,
                _extension_additions_list_spec_for_MITSearch,
                _root_component_type_list_2_spec_for_MITSearch,
                undefined
            );
            return new MITSearch /* SEQUENCE_CONSTRUCTOR_CALL */(
                base,
                discoveryScope,
                classRequest
            );
        };
    }
    return _cached_decoder_for_MITSearch(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MITSearch */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MITSearch */
let _cached_encoder_for_MITSearch: $.ASN1Encoder<MITSearch> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MITSearch */

/* START_OF_SYMBOL_DEFINITION _encode_MITSearch */
/**
 * @summary Encodes a(n) MITSearch into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MITSearch, encoded as an ASN.1 Element.
 */
export function _encode_MITSearch(
    value: MITSearch,
    elGetter: $.ASN1Encoder<MITSearch>
) {
    if (!_cached_encoder_for_MITSearch) {
        _cached_encoder_for_MITSearch = function (
            value: MITSearch,
            elGetter: $.ASN1Encoder<MITSearch>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.base,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Scope(
                            value.discoveryScope,
                            $.BER
                        ),
                        /* IF_DEFAULT */ value.classRequest === undefined ||
                        $.deepEq(
                            value.classRequest,
                            MITSearch._default_value_for_classRequest
                        )
                            ? undefined
                            : $._encodeBoolean(value.classRequest, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MITSearch(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MITSearch */

/* eslint-enable */
