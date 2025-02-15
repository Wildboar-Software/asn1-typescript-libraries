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
import {
    CMISFilter,
    _decode_CMISFilter,
    _encode_CMISFilter,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/CMISFilter.ta';
export {
    CMISFilter,
    _decode_CMISFilter,
    _encode_CMISFilter,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/CMISFilter.ta';

/* START_OF_SYMBOL_DEFINITION DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection */
/**
 * @summary DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DynamicSimpleScanArgument-scopeOrListChoice-scopedSelection ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection {
    constructor(
        /**
         * @summary `baseManagedObject`.
         * @public
         * @readonly
         */
        readonly baseManagedObject: ObjectInstance,
        /**
         * @summary `scope`.
         * @public
         * @readonly
         */
        readonly scope: Scope,
        /**
         * @summary `scanningFilter`.
         * @public
         * @readonly
         */
        readonly scanningFilter: CMISFilter
    ) {}

    /**
     * @summary Restructures an object into a DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection
     * @description
     *
     * This takes an `object` and converts it to a `DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection`.
     * @returns {DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection}
     */
    public static _from_object(
        _o: {
            [_K in keyof DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection]: DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection[_K];
        }
    ): DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection {
        return new DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection(
            _o.baseManagedObject,
            _o.scope,
            _o.scanningFilter
        );
    }
}
/* END_OF_SYMBOL_DEFINITION DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection */
/**
 * @summary The Leading Root Component Types of DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'baseManagedObject',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec('scope', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'scanningFilter',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection */
/**
 * @summary The Trailing Root Component Types of DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection */
/**
 * @summary The Extension Addition Component Types of DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection */
let _cached_decoder_for_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection: $.ASN1Decoder<DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection */

/* START_OF_SYMBOL_DEFINITION _decode_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection */
/**
 * @summary Decodes an ASN.1 element into a(n) DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection} The decoded data structure.
 */
export function _decode_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection(
    el: _Element
) {
    if (
        !_cached_decoder_for_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection
    ) {
        _cached_decoder_for_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection = function (
            el: _Element
        ): DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'DynamicSimpleScanArgument-scopeOrListChoice-scopedSelection contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'baseManagedObject';
            sequence[1].name = 'scope';
            sequence[2].name = 'scanningFilter';
            let baseManagedObject!: ObjectInstance;
            let scope!: Scope;
            let scanningFilter!: CMISFilter;
            baseManagedObject = _decode_ObjectInstance(sequence[0]);
            scope = _decode_Scope(sequence[1]);
            scanningFilter = _decode_CMISFilter(sequence[2]);
            return new DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection(
                baseManagedObject,
                scope,
                scanningFilter
            );
        };
    }
    return _cached_decoder_for_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection */
let _cached_encoder_for_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection: $.ASN1Encoder<DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection */

/* START_OF_SYMBOL_DEFINITION _encode_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection */
/**
 * @summary Encodes a(n) DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection, encoded as an ASN.1 Element.
 */
export function _encode_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection(
    value: DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection,
    elGetter: $.ASN1Encoder<DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection>
) {
    if (
        !_cached_encoder_for_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection
    ) {
        _cached_encoder_for_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection = function (
            value: DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection,
            elGetter: $.ASN1Encoder<DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.baseManagedObject,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Scope(value.scope, $.BER),
                        /* REQUIRED   */ _encode_CMISFilter(
                            value.scanningFilter,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection */

/* eslint-enable */
