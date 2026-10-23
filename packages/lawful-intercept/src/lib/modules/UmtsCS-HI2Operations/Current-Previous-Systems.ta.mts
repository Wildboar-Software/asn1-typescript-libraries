/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Current_Previous_Systems
 * @description
 * 
 * Serving system and MSC before and after a location registration change.
 * Previous values are conditional on cancel location and on register location.
 * Current values are conditional on register location. 3GPP TS 33.108, tables
 * 5.5C and 5.5D, annex B.3a.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Current-Previous-Systems ::= SEQUENCE
 * {
 *     current-Serving-System-Identifier            [1] OCTET STRING OPTIONAL,
 *     -- VPLMN id (Mobile Country Code and Mobile Network Country, E. 212 number [87]).
 *     current-Serving-MSC-Number                    [2] OCTET STRING OPTIONAL,
 *     -- E.164 number of the serving MSC.
 *     current-Serving-MSC-Address                [3] OCTET STRING OPTIONAL,
 *     -- The IP address of the serving MSC or its Diameter Origin-Host and Origin-Realm.    previous-
 *     previous-Serving-System-Identifier            [4] OCTET STRING OPTIONAL,
 *     -- VPLMN id (Mobile Country Code and Mobile Network Country, defined in E212 [87]).
 *     previous-Serving-MSC-Number                [5] OCTET STRING OPTIONAL,
 *     -- The E.164 number of the previous serving MSC.
 *     previous-Serving-MSC-Address                [6] OCTET STRING OPTIONAL,
 *     -- The IP address of the previous serving MSC or its Diameter Origin-Host and Origin-Realm.
 * ...
 * }
 * ```
 * 
 * @class
 */
export
class Current_Previous_Systems {
    /**
     * @summary `current_Serving_System_Identifier`.
     * @description
     * 
     * Current VPLMN identity, mobile country code and mobile network code,
     * ITU-T E.212. Conditional on register location. Table 5.5D's condition
     * cell for this parameter says "Provide the previous VPLMN id", which
     * conflicts with the parameter name and with the annex B.3a comment. 3GPP
     * TS 33.108, table 5.5D and annex B.3a.
     * 
     * @public
     * @readonly
     */
    readonly current_Serving_System_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `current_Serving_MSC_Number`.
     * @description
     * 
     * E.164 number of the current serving MSC. Conditional on register
     * location. 3GPP TS 33.108, table 5.5D and annex B.3a.
     * 
     * @public
     * @readonly
     */
    readonly current_Serving_MSC_Number: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `current_Serving_MSC_Address`.
     * @description
     * 
     * IP address of the current serving MSC, or its Diameter Origin-Host and
     * Origin-Realm. Conditional on register location. Table 5.5D's condition
     * mentions only the IP address. 3GPP TS 33.108, table 5.5D and annex B.3a.
     * 
     * @public
     * @readonly
     */
    readonly current_Serving_MSC_Address: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `previous_Serving_System_Identifier`.
     * @description
     * 
     * Previous VPLMN identity, mobile country code and mobile network code,
     * ITU-T E.212. Conditional on cancel location and on register location.
     * 3GPP TS 33.108, tables 5.5C and 5.5D, annex B.3a.
     * 
     * @public
     * @readonly
     */
    readonly previous_Serving_System_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `previous_Serving_MSC_Number`.
     * @description
     * 
     * E.164 number of the previous serving MSC, as included in the intercepted
     * MAP message. Conditional on cancel location and on register location.
     * 3GPP TS 33.108, table 5.5 and annex B.3a.
     * 
     * @public
     * @readonly
     */
    readonly previous_Serving_MSC_Number: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `previous_Serving_MSC_Address`.
     * @description
     * 
     * IP address of the previous serving MSC, or its Diameter Origin-Host and
     * Origin-Realm. Table 5.5 describes the IP address included in the
     * intercepted MAP message and does not mention Diameter. Conditional on
     * cancel location and on register location. 3GPP TS 33.108, table 5.5 and
     * annex B.3a.
     * 
     * @public
     * @readonly
     */
    readonly previous_Serving_MSC_Address: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        current_Serving_System_Identifier?: OPTIONAL<OCTET_STRING>,
        current_Serving_MSC_Number?: OPTIONAL<OCTET_STRING>,
        current_Serving_MSC_Address?: OPTIONAL<OCTET_STRING>,
        previous_Serving_System_Identifier?: OPTIONAL<OCTET_STRING>,
        previous_Serving_MSC_Number?: OPTIONAL<OCTET_STRING>,
        previous_Serving_MSC_Address?: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.current_Serving_System_Identifier = current_Serving_System_Identifier;
        this.current_Serving_MSC_Number = current_Serving_MSC_Number;
        this.current_Serving_MSC_Address = current_Serving_MSC_Address;
        this.previous_Serving_System_Identifier = previous_Serving_System_Identifier;
        this.previous_Serving_MSC_Number = previous_Serving_MSC_Number;
        this.previous_Serving_MSC_Address = previous_Serving_MSC_Address;
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
        return new Current_Previous_Systems(_o.current_Serving_System_Identifier, _o.current_Serving_MSC_Number, _o.current_Serving_MSC_Address, _o.previous_Serving_System_Identifier, _o.previous_Serving_MSC_Number, _o.previous_Serving_MSC_Address, _o._unrecognizedExtensionsList);
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
    new $.ComponentSpec("current-Serving-System-Identifier", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("current-Serving-MSC-Number", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("current-Serving-MSC-Address", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("previous-Serving-System-Identifier", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("previous-Serving-MSC-Number", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("previous-Serving-MSC-Address", true, $.hasTag(_TagClass.context, 6))
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
    let current_Serving_System_Identifier: OPTIONAL<OCTET_STRING>;
    let current_Serving_MSC_Number: OPTIONAL<OCTET_STRING>;
    let current_Serving_MSC_Address: OPTIONAL<OCTET_STRING>;
    let previous_Serving_System_Identifier: OPTIONAL<OCTET_STRING>;
    let previous_Serving_MSC_Number: OPTIONAL<OCTET_STRING>;
    let previous_Serving_MSC_Address: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "current-Serving-System-Identifier": (_el: _Element): void => { current_Serving_System_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "current-Serving-MSC-Number": (_el: _Element): void => { current_Serving_MSC_Number = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "current-Serving-MSC-Address": (_el: _Element): void => { current_Serving_MSC_Address = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "previous-Serving-System-Identifier": (_el: _Element): void => { previous_Serving_System_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "previous-Serving-MSC-Number": (_el: _Element): void => { previous_Serving_MSC_Number = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "previous-Serving-MSC-Address": (_el: _Element): void => { previous_Serving_MSC_Address = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Current_Previous_Systems,
        _extension_additions_list_spec_for_Current_Previous_Systems,
        _root_component_type_list_2_spec_for_Current_Previous_Systems,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Current_Previous_Systems(
        current_Serving_System_Identifier,
        current_Serving_MSC_Number,
        current_Serving_MSC_Address,
        previous_Serving_System_Identifier,
        previous_Serving_MSC_Number,
        previous_Serving_MSC_Address,
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
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.current_Serving_System_Identifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.current_Serving_System_Identifier, $.BER);
    }
    if (value.current_Serving_MSC_Number !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.current_Serving_MSC_Number, $.BER);
    }
    if (value.current_Serving_MSC_Address !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.current_Serving_MSC_Address, $.BER);
    }
    if (value.previous_Serving_System_Identifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.previous_Serving_System_Identifier, $.BER);
    }
    if (value.previous_Serving_MSC_Number !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.previous_Serving_MSC_Number, $.BER);
    }
    if (value.previous_Serving_MSC_Address !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.previous_Serving_MSC_Address, $.BER);
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
