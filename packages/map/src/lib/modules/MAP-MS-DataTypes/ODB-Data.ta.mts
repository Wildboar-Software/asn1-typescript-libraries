/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { ODB_GeneralData, _decode_ODB_GeneralData, _encode_ODB_GeneralData } from "../MAP-MS-DataTypes/ODB-GeneralData.ta.mjs";
import { ODB_HPLMN_Data, _decode_ODB_HPLMN_Data, _encode_ODB_HPLMN_Data } from "../MAP-MS-DataTypes/ODB-HPLMN-Data.ta.mjs";


/**
 * @summary ODB_Data
 * @description
 *
 * Operator Determined Barring data: general categories plus optional
 * HPLMN-specific categories. Included in Insert Subscriber Data when
 * `subscriberStatus` is Operator Determined Barring. Not used by the CSS. (3GPP
 * TS 29.002 V19.1.0 clauses 7.6.3.85, 8.8.1.3, and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ODB-Data ::= SEQUENCE {
 *     odb-GeneralData    ODB-GeneralData,
 *     odb-HPLMN-Data    ODB-HPLMN-Data    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class ODB_Data {
    constructor (
        /**
         * @summary `odb_GeneralData`.
         * @description
         *
         * ODB categories applicable in any PLMN. (3GPP TS 29.002 V19.1.0 clause
         * 7.6.3.9)
         *
         * @public
         * @readonly
         */
        readonly odb_GeneralData: ODB_GeneralData,
        /**
         * @summary `odb_HPLMN_Data`.
         * @description
         *
         * HPLMN-specific ODB; present when the subscriber is in the HPLMN and
         * those categories apply. (3GPP TS 29.002 V19.1.0 clause 7.6.3.10)
         *
         * @public
         * @readonly
         */
        readonly odb_HPLMN_Data: OPTIONAL<ODB_HPLMN_Data>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ODB_Data
     * @description
     * 
     * This takes an `object` and converts it to a `ODB_Data`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ODB_Data`.
     * @returns {ODB_Data}
     */
    public static _from_object (_o: { [_K in keyof (ODB_Data)]: (ODB_Data)[_K] }): ODB_Data {
        return new ODB_Data(_o.odb_GeneralData, _o.odb_HPLMN_Data, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ODB_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ODB_Data: $.ComponentSpec[] = [
    new $.ComponentSpec("odb-GeneralData", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("odb-HPLMN-Data", true, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of ODB_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ODB_Data: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ODB_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ODB_Data: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ODB_Data: $.ASN1Decoder<ODB_Data> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ODB_Data
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ODB_Data (el: _Element): ODB_Data {
    if (!_cached_decoder_for_ODB_Data) { _cached_decoder_for_ODB_Data = function (el: _Element): ODB_Data {
    let odb_GeneralData!: ODB_GeneralData;
    let odb_HPLMN_Data: OPTIONAL<ODB_HPLMN_Data> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "odb-GeneralData": (_el: _Element): void => { odb_GeneralData = _decode_ODB_GeneralData(_el); },
        "odb-HPLMN-Data": (_el: _Element): void => { odb_HPLMN_Data = _decode_ODB_HPLMN_Data(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ODB_Data,
        _extension_additions_list_spec_for_ODB_Data,
        _root_component_type_list_2_spec_for_ODB_Data,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ODB_Data(
        odb_GeneralData,
        odb_HPLMN_Data,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ODB_Data(el);
}

let _cached_encoder_for_ODB_Data: $.ASN1Encoder<ODB_Data> | null = null;

/**
 * @summary Encodes a(n) ODB_Data into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ODB_Data, encoded as an ASN.1 Element.
 */
export
function _encode_ODB_Data (value: ODB_Data, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ODB_Data) { _cached_encoder_for_ODB_Data = function (value: ODB_Data, elGetter: $.ASN1Encoder<ODB_Data>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ODB_GeneralData(value.odb_GeneralData, $.BER),
            /* IF_ABSENT  */ ((value.odb_HPLMN_Data === undefined) ? undefined : _encode_ODB_HPLMN_Data(value.odb_HPLMN_Data, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ODB_Data(value, elGetter);
}


/* eslint-enable */
