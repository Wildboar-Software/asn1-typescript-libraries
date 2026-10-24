/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ExternalChargingASN, _decode_ExternalChargingASN, _encode_ExternalChargingASN } from "../TS33128Payloads/ExternalChargingASN.ta.mjs";
// export { ExternalChargingASN, _decode_ExternalChargingASN, _encode_ExternalChargingASN } from "../TS33128Payloads/ExternalChargingASN.ta.mjs";


/**
 * @summary TranslatedChargingData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TranslatedChargingData ::= SEQUENCE
 * {
 *     releaseID           [1] INTEGER (0..7),
 *     versonID            [2] INTEGER (0..31),
 *     specificationNumber [3] INTEGER (0..31),
 *     releaseIDExtension  [4] INTEGER (0..255) OPTIONAL,
 *     recordData          [5] ExternalChargingASN
 * }
 * ```
 * 
 * @class
 */
export
class TranslatedChargingData {
    /**
     * @summary `releaseID`.
     * @description
     *
     * Derived from the release identifier field of the record format (see TS
     * 32.297 [149] clause 6.1.2.2).
     *
     * 3GPP TS 33.128, clause 7.19.3.14.
     *
     * @public
     * @readonly
     */
    readonly releaseID: INTEGER;
    /**
     * @summary `versonID`.
     * @description
     *
     * Derived from the version identifier field of the record format (see TS
     * 32.297 [149] clause 6.1.2.3).
     *
     * 3GPP TS 33.128, clause 7.19.3.14.
     *
     * @public
     * @readonly
     */
    readonly versonID: INTEGER;
    /**
     * @summary `specificationNumber`.
     * @description
     *
     * Derived from the TS number field of the record format (see TS 32.297
     * [149] clause 6.1.2.5).
     *
     * 3GPP TS 33.128, clause 7.19.3.14.
     *
     * @public
     * @readonly
     */
    readonly specificationNumber: INTEGER;
    /**
     * @summary `releaseIDExtension`.
     * @description
     *
     * Derived from the release identifier extension field of the record format.
     * Shall be included when the releaseID field integer is 7. (see TS 32.297
     * [149] clause 6.1.2.6).
     *
     * 3GPP TS 33.128, clause 7.19.3.14.
     *
     * @public
     * @readonly
     */
    readonly releaseIDExtension: OPTIONAL<INTEGER>;
    /**
     * @summary `recordData`.
     * @description
     *
     * Translated charging data using the syntax encoding rules as specified in
     * TS 32.298 [150] clause 5.2.
     *
     * 3GPP TS 33.128, clause 7.19.3.14.
     *
     * @public
     * @readonly
     */
    readonly recordData: ExternalChargingASN;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        releaseID: INTEGER,
        versonID: INTEGER,
        specificationNumber: INTEGER,
        releaseIDExtension: OPTIONAL<INTEGER>,
        recordData: ExternalChargingASN,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.releaseID = releaseID;
        this.versonID = versonID;
        this.specificationNumber = specificationNumber;
        this.releaseIDExtension = releaseIDExtension;
        this.recordData = recordData;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TranslatedChargingData
     * @description
     * 
     * This takes an `object` and converts it to a `TranslatedChargingData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TranslatedChargingData`.
     * @returns {TranslatedChargingData}
     */
    public static _from_object (_o: { [_K in keyof (TranslatedChargingData)]: (TranslatedChargingData)[_K] }): TranslatedChargingData {
        return new TranslatedChargingData(_o.releaseID, _o.versonID, _o.specificationNumber, _o.releaseIDExtension, _o.recordData, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TranslatedChargingData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TranslatedChargingData: $.ComponentSpec[] = [
    new $.ComponentSpec("releaseID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("versonID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("specificationNumber", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("releaseIDExtension", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("recordData", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of TranslatedChargingData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TranslatedChargingData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TranslatedChargingData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TranslatedChargingData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TranslatedChargingData: $.ASN1Decoder<TranslatedChargingData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TranslatedChargingData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TranslatedChargingData (el: _Element): TranslatedChargingData {
    if (!_cached_decoder_for_TranslatedChargingData) { _cached_decoder_for_TranslatedChargingData = function (el: _Element): TranslatedChargingData {
    let releaseID!: INTEGER;
    let versonID!: INTEGER;
    let specificationNumber!: INTEGER;
    let releaseIDExtension: OPTIONAL<INTEGER>;
    let recordData!: ExternalChargingASN;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "releaseID": (_el: _Element): void => {
            releaseID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof releaseID === "bigint" ? releaseID : BigInt(releaseID);
            if (_n < 0n || _n > 7n) {
                throw new ASN1OverflowError("TranslatedChargingData.releaseID violates INTEGER range");
            }
        },
        "versonID": (_el: _Element): void => {
            versonID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof versonID === "bigint" ? versonID : BigInt(versonID);
            if (_n < 0n || _n > 31n) {
                throw new ASN1OverflowError("TranslatedChargingData.versonID violates INTEGER range");
            }
        },
        "specificationNumber": (_el: _Element): void => {
            specificationNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof specificationNumber === "bigint" ? specificationNumber : BigInt(specificationNumber);
            if (_n < 0n || _n > 31n) {
                throw new ASN1OverflowError("TranslatedChargingData.specificationNumber violates INTEGER range");
            }
        },
        "releaseIDExtension": (_el: _Element): void => {
            releaseIDExtension = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof releaseIDExtension === "bigint" ? releaseIDExtension : BigInt(releaseIDExtension);
            if (_n < 0n || _n > 255n) {
                throw new ASN1OverflowError("TranslatedChargingData.releaseIDExtension violates INTEGER range");
            }
        },
        "recordData": (_el: _Element): void => { recordData = $._decode_implicit<ExternalChargingASN>(() => _decode_ExternalChargingASN)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TranslatedChargingData,
        _extension_additions_list_spec_for_TranslatedChargingData,
        _root_component_type_list_2_spec_for_TranslatedChargingData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TranslatedChargingData(
        releaseID,
        versonID,
        specificationNumber,
        releaseIDExtension,
        recordData,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TranslatedChargingData(el);
}

let _cached_encoder_for_TranslatedChargingData: $.ASN1Encoder<TranslatedChargingData> | null = null;

/**
 * @summary Encodes a(n) TranslatedChargingData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TranslatedChargingData, encoded as an ASN.1 Element.
 */
export
function _encode_TranslatedChargingData (value: TranslatedChargingData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TranslatedChargingData) { _cached_encoder_for_TranslatedChargingData = function (value: TranslatedChargingData, elGetter: $.ASN1Encoder<TranslatedChargingData>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.releaseID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.versonID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.specificationNumber, $.BER);
    if (value.releaseIDExtension !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.releaseIDExtension, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_ExternalChargingASN, $.BER)(value.recordData, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TranslatedChargingData(value, elGetter);
}


/* eslint-enable */
