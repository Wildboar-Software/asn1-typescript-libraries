/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    type OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Current_Previous_Systems
 * @description
 * 
 * Current and previous serving system of the target, taken from the intercepted
 * MAP or Diameter message at the HLR.
 * 
 * On register location the current VPLMN identity is mandatory and the previous
 * system is included when available (table 6.9F). On cancel location the
 * previous system is included when available (table 6.9E). S4-SGSN identities
 * are Diameter Origin-Host and Origin-Realm.
 * 
 * 3GPP TS 33.108, table 6.2, table 6.9E, and table 6.9F.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Current-Previous-Systems ::= SEQUENCE
 * {
 *     serving-System-Identifier            [1] OCTET STRING OPTIONAL,
 *     -- VPLMN id (Mobile Country Code and Mobile Network Country, E. 212 number [87]).
 *     current-Serving-SGSN-Number            [2] OCTET STRING OPTIONAL,
 *     -- E.164 number of the current serving SGSN.
 *     current-Serving-SGSN-Address        [3] OCTET STRING OPTIONAL,
 *                                                                                                     -- The IP address of the current serving SGSN or its Diameter Origin-Host and Origin-Realm.
 *                                                                                                     current-Serving-S4-SGSN-Address            [4]OCTET STRING OPTIONAL,
 *                                                                                                     -- The Diameter Origin-Host and Origin-Realm of the current serving S4 SGSN.
 *                                                                                                     previous-Serving-System-Identifier        [5] OCTET STRING OPTIONAL,
 *                                                                                                     -- VPLMN id (Mobile Country Code and Mobile Network Country, defined in E212 [87]).
 *                                                                                                     previous-Serving-SGSN-Number                [6] OCTET STRING OPTIONAL,
 *                                                                                                     -- The E.164 number of the previous serving SGCN.
 *                                                                                                     previous-Serving-SGSN-Address            [7] OCTET STRING OPTIONAL,
 *                                                                                                     -- The IP address of the previous serving SGCN or its Diameter Origin-Host and Origin-Realm.
 *                                                                                                     previous-Serving-S4-SGSN-Address            [8]OCTET STRING OPTIONAL,
 *                                                                                                     -- The Diameter Origin-Host and Origin-Realm of the previous serving S4 SGSN.
 * ...
 * }
 * ```
 * 
 * @class
 */
export
class Current_Previous_Systems {
    /**
     * @summary `serving_System_Identifier`.
     * @description
     * 
     * Current VPLMN identity (MCC and MNC, ITU-T E.212). Table 6.9F makes the
     * current serving-system identifier mandatory on register location.
     * 
     * Table 6.2's path says current-Serving-System-Identifier. The annex B.3
     * component is serving-System-Identifier.
     * 
     * 3GPP TS 33.108, table 6.9F and annex B.3.
     * @public
     * @readonly
     */
    readonly serving_System_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `current_Serving_SGSN_Number`.
     * @description
     * 
     * E.164 number of the current serving SGSN, from the intercepted MAP
     * message. Include it when available (table 6.9F).
     * 
     * 3GPP TS 33.108, table 6.9F and annex B.3.
     * @public
     * @readonly
     */
    readonly current_Serving_SGSN_Number: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `current_Serving_SGSN_Address`.
     * @description
     * 
     * IP address of the current serving SGSN, or its Diameter Origin-Host and
     * Origin-Realm. Include it when available (table 6.9F).
     * 
     * 3GPP TS 33.108, table 6.2 and annex B.3.
     * @public
     * @readonly
     */
    readonly current_Serving_SGSN_Address: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `current_Serving_S4_SGSN_Address`.
     * @description
     * 
     * Diameter Origin-Host and Origin-Realm of the current serving S4-SGSN.
     * Table 6.9F: include it when available.
     * 
     * Table 6.2's flattened path for the S4 row repeats the non-S4 SGSN
     * address. This component is the S4 identity defined in annex B.3.
     * 
     * 3GPP TS 33.108, table 6.9F and annex B.3.
     * @public
     * @readonly
     */
    readonly current_Serving_S4_SGSN_Address: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `previous_Serving_System_Identifier`.
     * @description
     * 
     * Previous VPLMN identity (MCC and MNC, ITU-T E.212). Include it when
     * available on cancel location and on register location (tables 6.9E and
     * 6.9F).
     * 
     * 3GPP TS 33.108, table 6.9E and annex B.3.
     * @public
     * @readonly
     */
    readonly previous_Serving_System_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `previous_Serving_SGSN_Number`.
     * @description
     * 
     * E.164 number of the previous serving SGSN, from the intercepted MAP
     * message. Include it when available (tables 6.9E and 6.9F). The annex
     * comment spells the node SGCN.
     * 
     * 3GPP TS 33.108, table 6.9E and annex B.3.
     * @public
     * @readonly
     */
    readonly previous_Serving_SGSN_Number: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `previous_Serving_SGSN_Address`.
     * @description
     * 
     * IP address of the previous serving SGSN, or its Diameter Origin-Host and
     * Origin-Realm. Include it when available (tables 6.9E and 6.9F).
     * 
     * 3GPP TS 33.108, table 6.9E and annex B.3.
     * @public
     * @readonly
     */
    readonly previous_Serving_SGSN_Address: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `previous_Serving_S4_SGSN_Address`.
     * @description
     * 
     * Diameter Origin-Host and Origin-Realm of the previous serving S4-SGSN.
     * Include it when available (tables 6.9E and 6.9F).
     * 
     * 3GPP TS 33.108, table 6.9E and annex B.3.
     * @public
     * @readonly
     */
    readonly previous_Serving_S4_SGSN_Address: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of annex B.3 does not define. They
     * are retained so a later addition on HI2 is not dropped.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        serving_System_Identifier?: OPTIONAL<OCTET_STRING>,
        current_Serving_SGSN_Number?: OPTIONAL<OCTET_STRING>,
        current_Serving_SGSN_Address?: OPTIONAL<OCTET_STRING>,
        current_Serving_S4_SGSN_Address?: OPTIONAL<OCTET_STRING>,
        previous_Serving_System_Identifier?: OPTIONAL<OCTET_STRING>,
        previous_Serving_SGSN_Number?: OPTIONAL<OCTET_STRING>,
        previous_Serving_SGSN_Address?: OPTIONAL<OCTET_STRING>,
        previous_Serving_S4_SGSN_Address?: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.serving_System_Identifier = serving_System_Identifier;
        this.current_Serving_SGSN_Number = current_Serving_SGSN_Number;
        this.current_Serving_SGSN_Address = current_Serving_SGSN_Address;
        this.current_Serving_S4_SGSN_Address = current_Serving_S4_SGSN_Address;
        this.previous_Serving_System_Identifier = previous_Serving_System_Identifier;
        this.previous_Serving_SGSN_Number = previous_Serving_SGSN_Number;
        this.previous_Serving_SGSN_Address = previous_Serving_SGSN_Address;
        this.previous_Serving_S4_SGSN_Address = previous_Serving_S4_SGSN_Address;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a Current_Previous_Systems
     * @description
     * 
     * This takes an `object` and converts it to a `Current_Previous_Systems`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Current_Previous_Systems`.
     * @returns {Current_Previous_Systems}
     */
    public static _from_object (_o: { [_K in keyof (Current_Previous_Systems)]: (Current_Previous_Systems)[_K] }): Current_Previous_Systems {
        return new Current_Previous_Systems(_o.serving_System_Identifier, _o.current_Serving_SGSN_Number, _o.current_Serving_SGSN_Address, _o.current_Serving_S4_SGSN_Address, _o.previous_Serving_System_Identifier, _o.previous_Serving_SGSN_Number, _o.previous_Serving_SGSN_Address, _o.previous_Serving_S4_SGSN_Address, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Current_Previous_Systems
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Current_Previous_Systems: $.ComponentSpec[] = [
    new $.ComponentSpec("serving-System-Identifier", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("current-Serving-SGSN-Number", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("current-Serving-SGSN-Address", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("current-Serving-S4-SGSN-Address", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("previous-Serving-System-Identifier", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("previous-Serving-SGSN-Number", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("previous-Serving-SGSN-Address", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("previous-Serving-S4-SGSN-Address", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of Current_Previous_Systems
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Current_Previous_Systems: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Current_Previous_Systems
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Current_Previous_Systems: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Current_Previous_Systems: $.ASN1Decoder<Current_Previous_Systems> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Current_Previous_Systems
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Current_Previous_Systems (el: _Element): Current_Previous_Systems {
    if (!_cached_decoder_for_Current_Previous_Systems) { _cached_decoder_for_Current_Previous_Systems = function (el: _Element): Current_Previous_Systems {
    let serving_System_Identifier: OPTIONAL<OCTET_STRING>;
    let current_Serving_SGSN_Number: OPTIONAL<OCTET_STRING>;
    let current_Serving_SGSN_Address: OPTIONAL<OCTET_STRING>;
    let current_Serving_S4_SGSN_Address: OPTIONAL<OCTET_STRING>;
    let previous_Serving_System_Identifier: OPTIONAL<OCTET_STRING>;
    let previous_Serving_SGSN_Number: OPTIONAL<OCTET_STRING>;
    let previous_Serving_SGSN_Address: OPTIONAL<OCTET_STRING>;
    let previous_Serving_S4_SGSN_Address: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "serving-System-Identifier": (_el: _Element): void => { serving_System_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "current-Serving-SGSN-Number": (_el: _Element): void => { current_Serving_SGSN_Number = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "current-Serving-SGSN-Address": (_el: _Element): void => { current_Serving_SGSN_Address = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "current-Serving-S4-SGSN-Address": (_el: _Element): void => { current_Serving_S4_SGSN_Address = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "previous-Serving-System-Identifier": (_el: _Element): void => { previous_Serving_System_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "previous-Serving-SGSN-Number": (_el: _Element): void => { previous_Serving_SGSN_Number = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "previous-Serving-SGSN-Address": (_el: _Element): void => { previous_Serving_SGSN_Address = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "previous-Serving-S4-SGSN-Address": (_el: _Element): void => { previous_Serving_S4_SGSN_Address = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Current_Previous_Systems,
        _extension_additions_list_spec_for_Current_Previous_Systems,
        _root_component_type_list_2_spec_for_Current_Previous_Systems,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Current_Previous_Systems(
        serving_System_Identifier,
        current_Serving_SGSN_Number,
        current_Serving_SGSN_Address,
        current_Serving_S4_SGSN_Address,
        previous_Serving_System_Identifier,
        previous_Serving_SGSN_Number,
        previous_Serving_SGSN_Address,
        previous_Serving_S4_SGSN_Address,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Current_Previous_Systems(el);
}

let _cached_encoder_for_Current_Previous_Systems: $.ASN1Encoder<Current_Previous_Systems> | null = null;

/**
 * @summary Encodes a(n) Current_Previous_Systems into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Current_Previous_Systems, encoded as an ASN.1 Element.
 */
export
function _encode_Current_Previous_Systems (value: Current_Previous_Systems, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Current_Previous_Systems) { _cached_encoder_for_Current_Previous_Systems = function (value: Current_Previous_Systems, elGetter: $.ASN1Encoder<Current_Previous_Systems>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.serving_System_Identifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.serving_System_Identifier, $.BER);
    }
    if (value.current_Serving_SGSN_Number !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.current_Serving_SGSN_Number, $.BER);
    }
    if (value.current_Serving_SGSN_Address !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.current_Serving_SGSN_Address, $.BER);
    }
    if (value.current_Serving_S4_SGSN_Address !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.current_Serving_S4_SGSN_Address, $.BER);
    }
    if (value.previous_Serving_System_Identifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.previous_Serving_System_Identifier, $.BER);
    }
    if (value.previous_Serving_SGSN_Number !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.previous_Serving_SGSN_Number, $.BER);
    }
    if (value.previous_Serving_SGSN_Address !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.previous_Serving_SGSN_Address, $.BER);
    }
    if (value.previous_Serving_S4_SGSN_Address !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.previous_Serving_S4_SGSN_Address, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Current_Previous_Systems(value, elGetter);
}


/* eslint-enable */
