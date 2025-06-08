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
    TargetRoutingCollective,
    _decode_TargetRoutingCollective,
    _encode_TargetRoutingCollective,
} from '../MHSRoutingORAddressSubtree/TargetRoutingCollective.ta';
export {
    TargetRoutingCollective,
    _decode_TargetRoutingCollective,
    _encode_TargetRoutingCollective,
} from '../MHSRoutingORAddressSubtree/TargetRoutingCollective.ta';
import {
    MHSDistributionListName,
    _decode_MHSDistributionListName,
    _encode_MHSDistributionListName,
} from '../MHSRoutingORAddressSubtree/MHSDistributionListName.ta';
export {
    MHSDistributionListName,
    _decode_MHSDistributionListName,
    _encode_MHSDistributionListName,
} from '../MHSRoutingORAddressSubtree/MHSDistributionListName.ta';

/* START_OF_SYMBOL_DEFINITION DLExpansionInformation */
/**
 * @summary DLExpansionInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLExpansionInformation ::= SEQUENCE {
 *   dl-expansion-routing-collectives  [0]  SET OF TargetRoutingCollective,
 *   dl-name                           [1]  MHSDistributionListName OPTIONAL,
 *   any-mta-may-expand                [2]  BOOLEAN DEFAULT FALSE
 * }
 * ```
 *
 * @class
 */
export class DLExpansionInformation {
    constructor(
        /**
         * @summary `dl_expansion_routing_collectives`.
         * @public
         * @readonly
         */
        readonly dl_expansion_routing_collectives: TargetRoutingCollective[],
        /**
         * @summary `dl_name`.
         * @public
         * @readonly
         */
        readonly dl_name: OPTIONAL<MHSDistributionListName>,
        /**
         * @summary `any_mta_may_expand`.
         * @public
         * @readonly
         */
        readonly any_mta_may_expand: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a DLExpansionInformation
     * @description
     *
     * This takes an `object` and converts it to a `DLExpansionInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DLExpansionInformation`.
     * @returns {DLExpansionInformation}
     */
    public static _from_object(
        _o: { [_K in keyof DLExpansionInformation]: DLExpansionInformation[_K] }
    ): DLExpansionInformation {
        return new DLExpansionInformation(
            _o.dl_expansion_routing_collectives,
            _o.dl_name,
            _o.any_mta_may_expand
        );
    }

    /**
     * @summary Getter that returns the default value for `any_mta_may_expand`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_any_mta_may_expand() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION DLExpansionInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DLExpansionInformation */
/**
 * @summary The Leading Root Component Types of DLExpansionInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DLExpansionInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'dl-expansion-routing-collectives',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'dl-name',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'any-mta-may-expand',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DLExpansionInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DLExpansionInformation */
/**
 * @summary The Trailing Root Component Types of DLExpansionInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DLExpansionInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DLExpansionInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DLExpansionInformation */
/**
 * @summary The Extension Addition Component Types of DLExpansionInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DLExpansionInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DLExpansionInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DLExpansionInformation */
let _cached_decoder_for_DLExpansionInformation: $.ASN1Decoder<DLExpansionInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DLExpansionInformation */

/* START_OF_SYMBOL_DEFINITION _decode_DLExpansionInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) DLExpansionInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DLExpansionInformation} The decoded data structure.
 */
export function _decode_DLExpansionInformation(el: _Element) {
    if (!_cached_decoder_for_DLExpansionInformation) {
        _cached_decoder_for_DLExpansionInformation = function (
            el: _Element
        ): DLExpansionInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let dl_expansion_routing_collectives!: TargetRoutingCollective[];
            let dl_name: OPTIONAL<MHSDistributionListName>;
            let any_mta_may_expand: OPTIONAL<BOOLEAN> =
                DLExpansionInformation._default_value_for_any_mta_may_expand;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'dl-expansion-routing-collectives': (_el: _Element): void => {
                    dl_expansion_routing_collectives = $._decode_implicit<
                        TargetRoutingCollective[]
                    >(() =>
                        $._decodeSetOf<TargetRoutingCollective>(
                            () => _decode_TargetRoutingCollective
                        )
                    )(_el);
                },
                'dl-name': (_el: _Element): void => {
                    dl_name = $._decode_implicit<MHSDistributionListName>(
                        () => _decode_MHSDistributionListName
                    )(_el);
                },
                'any-mta-may-expand': (_el: _Element): void => {
                    any_mta_may_expand = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DLExpansionInformation,
                _extension_additions_list_spec_for_DLExpansionInformation,
                _root_component_type_list_2_spec_for_DLExpansionInformation,
                undefined
            );
            return new DLExpansionInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
                dl_expansion_routing_collectives,
                dl_name,
                any_mta_may_expand
            );
        };
    }
    return _cached_decoder_for_DLExpansionInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DLExpansionInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DLExpansionInformation */
let _cached_encoder_for_DLExpansionInformation: $.ASN1Encoder<DLExpansionInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DLExpansionInformation */

/* START_OF_SYMBOL_DEFINITION _encode_DLExpansionInformation */
/**
 * @summary Encodes a(n) DLExpansionInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLExpansionInformation, encoded as an ASN.1 Element.
 */
export function _encode_DLExpansionInformation(
    value: DLExpansionInformation,
    elGetter: $.ASN1Encoder<DLExpansionInformation>
) {
    if (!_cached_encoder_for_DLExpansionInformation) {
        _cached_encoder_for_DLExpansionInformation = function (
            value: DLExpansionInformation,
            elGetter: $.ASN1Encoder<DLExpansionInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () =>
                                $._encodeSetOf<TargetRoutingCollective>(
                                    () => _encode_TargetRoutingCollective,
                                    $.BER
                                ),
                            $.BER
                        )(value.dl_expansion_routing_collectives, $.BER),
                        /* IF_ABSENT  */ value.dl_name === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_MHSDistributionListName,
                                  $.BER
                              )(value.dl_name, $.BER),
                        /* IF_DEFAULT */ value.any_mta_may_expand ===
                            undefined ||
                        $.deepEq(
                            value.any_mta_may_expand,
                            DLExpansionInformation._default_value_for_any_mta_may_expand
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.any_mta_may_expand, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DLExpansionInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DLExpansionInformation */

/* eslint-enable */
