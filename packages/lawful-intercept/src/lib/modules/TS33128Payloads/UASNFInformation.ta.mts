/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UASTargetIdentifier, _decode_UASTargetIdentifier, _encode_UASTargetIdentifier } from "../TS33128Payloads/UASTargetIdentifier.ta.mjs";
// export { UASTargetIdentifier, _decode_UASTargetIdentifier, _encode_UASTargetIdentifier } from "../TS33128Payloads/UASTargetIdentifier.ta.mjs";
import { UASNFProcedure, _decode_UASNFProcedure, _encode_UASNFProcedure, _enum_for_UASNFProcedure } from "../TS33128Payloads/UASNFProcedure.ta.mjs";
// export { UASNFProcedure, _enum_for_UASNFProcedure, UASNFProcedure_configurationCreate /* IMPORTED_LONG_ENUMERATION_ITEM */, configurationCreate /* IMPORTED_SHORT_ENUMERATION_ITEM */, UASNFProcedure_configurationRetrieve /* IMPORTED_LONG_ENUMERATION_ITEM */, configurationRetrieve /* IMPORTED_SHORT_ENUMERATION_ITEM */, UASNFProcedure_configurationUpdate /* IMPORTED_LONG_ENUMERATION_ITEM */, configurationUpdate /* IMPORTED_SHORT_ENUMERATION_ITEM */, UASNFProcedure_configurationModify /* IMPORTED_LONG_ENUMERATION_ITEM */, configurationModify /* IMPORTED_SHORT_ENUMERATION_ITEM */, UASNFProcedure_configurationDelete /* IMPORTED_LONG_ENUMERATION_ITEM */, configurationDelete /* IMPORTED_SHORT_ENUMERATION_ITEM */, UASNFProcedure_authenticationAuthorize /* IMPORTED_LONG_ENUMERATION_ITEM */, authenticationAuthorize /* IMPORTED_SHORT_ENUMERATION_ITEM */, UASNFProcedure_authenticationNotification /* IMPORTED_LONG_ENUMERATION_ITEM */, authenticationNotification /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UASNFProcedure, _encode_UASNFProcedure } from "../TS33128Payloads/UASNFProcedure.ta.mjs";
import { UASNFUASInformation, _decode_UASNFUASInformation, _encode_UASNFUASInformation } from "../TS33128Payloads/UASNFUASInformation.ta.mjs";
// export { UASNFUASInformation, _decode_UASNFUASInformation, _encode_UASNFUASInformation } from "../TS33128Payloads/UASNFUASInformation.ta.mjs";


/**
 * @summary UASNFInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UASNFInformation ::= SEQUENCE
 * {
 *     uASTargetIdentifiers        [1] SEQUENCE (SIZE(1..MAX)) OF UASTargetIdentifier,
 *     uASNFProcedure              [2] UASNFProcedure,
 *     uASNFUASInformation         [3] UASNFUASInformation
 * }
 * ```
 * 
 * @class
 */
export
class UASNFInformation {
    /**
     * @summary `uASTargetIdentifiers`.
     * @public
     * @readonly
     */
    readonly uASTargetIdentifiers: UASTargetIdentifier[];
    /**
     * @summary `uASNFProcedure`.
     * @public
     * @readonly
     */
    readonly uASNFProcedure: UASNFProcedure;
    /**
     * @summary `uASNFUASInformation`.
     * @public
     * @readonly
     */
    readonly uASNFUASInformation: UASNFUASInformation;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        uASTargetIdentifiers: UASTargetIdentifier[],
        uASNFProcedure: UASNFProcedure,
        uASNFUASInformation: UASNFUASInformation,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.uASTargetIdentifiers = uASTargetIdentifiers;
        this.uASNFProcedure = uASNFProcedure;
        this.uASNFUASInformation = uASNFUASInformation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a UASNFInformation
     * @description
     * 
     * This takes an `object` and converts it to a `UASNFInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UASNFInformation`.
     * @returns {UASNFInformation}
     */
    public static _from_object (_o: { [_K in keyof (UASNFInformation)]: (UASNFInformation)[_K] }): UASNFInformation {
        return new UASNFInformation(_o.uASTargetIdentifiers, _o.uASNFProcedure, _o.uASNFUASInformation, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `uASNFProcedure`
         * @public
         * @static
         */

    public static _enum_for_uASNFProcedure = _enum_for_UASNFProcedure;
}

/**
 * @summary The Leading Root Component Types of UASNFInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UASNFInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("uASTargetIdentifiers", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("uASNFProcedure", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("uASNFUASInformation", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of UASNFInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UASNFInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UASNFInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UASNFInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UASNFInformation: $.ASN1Decoder<UASNFInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UASNFInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UASNFInformation (el: _Element): UASNFInformation {
    if (!_cached_decoder_for_UASNFInformation) { _cached_decoder_for_UASNFInformation = function (el: _Element): UASNFInformation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("UASNFInformation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "uASTargetIdentifiers";
    sequence[1].name = "uASNFProcedure";
    sequence[2].name = "uASNFUASInformation";
    let uASTargetIdentifiers!: UASTargetIdentifier[];
    let uASNFProcedure!: UASNFProcedure;
    let uASNFUASInformation!: UASNFUASInformation;
    uASTargetIdentifiers = $._decode_implicit<UASTargetIdentifier[]>(() => $._decodeSequenceOf<UASTargetIdentifier>(() => _decode_UASTargetIdentifier))(sequence[0]);
    uASNFProcedure = $._decode_implicit<UASNFProcedure>(() => _decode_UASNFProcedure)(sequence[1]);
    uASNFUASInformation = $._decode_explicit<UASNFUASInformation>(() => _decode_UASNFUASInformation)(sequence[2]);
    return new UASNFInformation(
        uASTargetIdentifiers,
        uASNFProcedure,
        uASNFUASInformation,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_UASNFInformation(el);
}

let _cached_encoder_for_UASNFInformation: $.ASN1Encoder<UASNFInformation> | null = null;

/**
 * @summary Encodes a(n) UASNFInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UASNFInformation, encoded as an ASN.1 Element.
 */
export
function _encode_UASNFInformation (value: UASNFInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UASNFInformation) { _cached_encoder_for_UASNFInformation = function (value: UASNFInformation, elGetter: $.ASN1Encoder<UASNFInformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<UASTargetIdentifier>(() => _encode_UASTargetIdentifier, $.BER), $.BER)(value.uASTargetIdentifiers, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_UASNFProcedure, $.BER)(value.uASNFProcedure, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_UASNFUASInformation, $.BER)(value.uASNFUASInformation, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_UASNFInformation(value, elGetter);
}


/* eslint-enable */
