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
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta';
export {
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta';
import {
    Actions,
    Actions_owner_report /* IMPORTED_LONG_NAMED_BIT */,
    owner_report /* IMPORTED_SHORT_NAMED_BIT */,
    Actions_originator_on_previous_dl /* IMPORTED_LONG_NAMED_BIT */,
    originator_on_previous_dl /* IMPORTED_SHORT_NAMED_BIT */,
    Actions_secure_dl_operation /* IMPORTED_LONG_NAMED_BIT */,
    secure_dl_operation /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Actions,
    _encode_Actions,
} from '../MhsAcctAsn1Module/Actions.ta';
export {
    Actions,
    Actions_owner_report /* IMPORTED_LONG_NAMED_BIT */,
    owner_report /* IMPORTED_SHORT_NAMED_BIT */,
    Actions_originator_on_previous_dl /* IMPORTED_LONG_NAMED_BIT */,
    originator_on_previous_dl /* IMPORTED_SHORT_NAMED_BIT */,
    Actions_secure_dl_operation /* IMPORTED_LONG_NAMED_BIT */,
    secure_dl_operation /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Actions,
    _encode_Actions,
} from '../MhsAcctAsn1Module/Actions.ta';

/* START_OF_SYMBOL_DEFINITION DLExpansionProcessingInfo */
/**
 * @summary DLExpansionProcessingInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLExpansionProcessingInfo ::= SEQUENCE {
 *   dlORName  ORAddressAndOptionalDirectoryName,
 *   actions   Actions
 * }
 * ```
 *
 * @class
 */
export class DLExpansionProcessingInfo {
    constructor(
        /**
         * @summary `dlORName`.
         * @public
         * @readonly
         */
        readonly dlORName: ORAddressAndOptionalDirectoryName,
        /**
         * @summary `actions`.
         * @public
         * @readonly
         */
        readonly actions: Actions
    ) {}

    /**
     * @summary Restructures an object into a DLExpansionProcessingInfo
     * @description
     *
     * This takes an `object` and converts it to a `DLExpansionProcessingInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DLExpansionProcessingInfo`.
     * @returns {DLExpansionProcessingInfo}
     */
    public static _from_object(
        _o: {
            [_K in keyof DLExpansionProcessingInfo]: DLExpansionProcessingInfo[_K];
        }
    ): DLExpansionProcessingInfo {
        return new DLExpansionProcessingInfo(_o.dlORName, _o.actions);
    }
}
/* END_OF_SYMBOL_DEFINITION DLExpansionProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DLExpansionProcessingInfo */
/**
 * @summary The Leading Root Component Types of DLExpansionProcessingInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DLExpansionProcessingInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'dlORName',
        false,
        $.hasTag(_TagClass.application, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'actions',
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DLExpansionProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DLExpansionProcessingInfo */
/**
 * @summary The Trailing Root Component Types of DLExpansionProcessingInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DLExpansionProcessingInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DLExpansionProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DLExpansionProcessingInfo */
/**
 * @summary The Extension Addition Component Types of DLExpansionProcessingInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DLExpansionProcessingInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DLExpansionProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DLExpansionProcessingInfo */
let _cached_decoder_for_DLExpansionProcessingInfo: $.ASN1Decoder<DLExpansionProcessingInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DLExpansionProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _decode_DLExpansionProcessingInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) DLExpansionProcessingInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DLExpansionProcessingInfo} The decoded data structure.
 */
export function _decode_DLExpansionProcessingInfo(el: _Element) {
    if (!_cached_decoder_for_DLExpansionProcessingInfo) {
        _cached_decoder_for_DLExpansionProcessingInfo = function (
            el: _Element
        ): DLExpansionProcessingInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'DLExpansionProcessingInfo contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'dlORName';
            sequence[1].name = 'actions';
            let dlORName!: ORAddressAndOptionalDirectoryName;
            let actions!: Actions;
            dlORName = _decode_ORAddressAndOptionalDirectoryName(sequence[0]);
            actions = _decode_Actions(sequence[1]);
            return new DLExpansionProcessingInfo(dlORName, actions);
        };
    }
    return _cached_decoder_for_DLExpansionProcessingInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DLExpansionProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DLExpansionProcessingInfo */
let _cached_encoder_for_DLExpansionProcessingInfo: $.ASN1Encoder<DLExpansionProcessingInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DLExpansionProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _encode_DLExpansionProcessingInfo */
/**
 * @summary Encodes a(n) DLExpansionProcessingInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLExpansionProcessingInfo, encoded as an ASN.1 Element.
 */
export function _encode_DLExpansionProcessingInfo(
    value: DLExpansionProcessingInfo,
    elGetter: $.ASN1Encoder<DLExpansionProcessingInfo>
) {
    if (!_cached_encoder_for_DLExpansionProcessingInfo) {
        _cached_encoder_for_DLExpansionProcessingInfo = function (
            value: DLExpansionProcessingInfo,
            elGetter: $.ASN1Encoder<DLExpansionProcessingInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ORAddressAndOptionalDirectoryName(
                            value.dlORName,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Actions(value.actions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DLExpansionProcessingInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DLExpansionProcessingInfo */

/* eslint-enable */
