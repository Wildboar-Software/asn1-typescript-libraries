/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DataNodeIdentifier, _decode_DataNodeIdentifier, _encode_DataNodeIdentifier } from "../EpsHI2Operations/DataNodeIdentifier.ta.mjs";
// export { DataNodeIdentifier, _decode_DataNodeIdentifier, _encode_DataNodeIdentifier } from "../EpsHI2Operations/DataNodeIdentifier.ta.mjs";


/**
 * @summary Current_Previous_Systems
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Current-Previous-Systems ::= SEQUENCE
 * {
 *  serving-System-Identifier [1] OCTET STRING OPTIONAL,
 *  -- VPLMN id (Mobile Country Code and Mobile Network Country, E. 212 number [87]).
 *  current-Serving-MME-Address [2] DataNodeIdentifier OPTIONAL,
 *  -- The IP address of the current serving MME or its the Diameter Origin-Host and Origin-Realm.
 *  previous-Serving-System-Identifier [3] OCTET STRING OPTIONAL,
 *  -- VPLMN id (Mobile Country Code and Mobile Network Country, defined in E212 [87]).
 *  previous-Serving-MME-Address [4] DataNodeIdentifier OPTIONAL,
 *  -- The IP address of the previous serving MME or its Diameter Origin-Host and Origin-Realm.
 * ...
 * }
 * ```
 * 
 * @class
 */
export
class Current_Previous_Systems {
    constructor (
        /**
         * @summary `serving_System_Identifier`.
         * @public
         * @readonly
         */
        readonly serving_System_Identifier: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `current_Serving_MME_Address`.
         * @public
         * @readonly
         */
        readonly current_Serving_MME_Address: OPTIONAL<DataNodeIdentifier>,
        /**
         * @summary `previous_Serving_System_Identifier`.
         * @public
         * @readonly
         */
        readonly previous_Serving_System_Identifier: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `previous_Serving_MME_Address`.
         * @public
         * @readonly
         */
        readonly previous_Serving_MME_Address: OPTIONAL<DataNodeIdentifier>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

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
        return new Current_Previous_Systems(_o.serving_System_Identifier, _o.current_Serving_MME_Address, _o.previous_Serving_System_Identifier, _o.previous_Serving_MME_Address, _o._unrecognizedExtensionsList);
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
    new $.ComponentSpec("current-Serving-MME-Address", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("previous-Serving-System-Identifier", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("previous-Serving-MME-Address", true, $.hasTag(_TagClass.context, 4))
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
    let current_Serving_MME_Address: OPTIONAL<DataNodeIdentifier>;
    let previous_Serving_System_Identifier: OPTIONAL<OCTET_STRING>;
    let previous_Serving_MME_Address: OPTIONAL<DataNodeIdentifier>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "serving-System-Identifier": (_el: _Element): void => { serving_System_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "current-Serving-MME-Address": (_el: _Element): void => { current_Serving_MME_Address = $._decode_implicit<DataNodeIdentifier>(() => _decode_DataNodeIdentifier)(_el); },
        "previous-Serving-System-Identifier": (_el: _Element): void => { previous_Serving_System_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "previous-Serving-MME-Address": (_el: _Element): void => { previous_Serving_MME_Address = $._decode_implicit<DataNodeIdentifier>(() => _decode_DataNodeIdentifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Current_Previous_Systems,
        _extension_additions_list_spec_for_Current_Previous_Systems,
        _root_component_type_list_2_spec_for_Current_Previous_Systems,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Current_Previous_Systems(
        serving_System_Identifier,
        current_Serving_MME_Address,
        previous_Serving_System_Identifier,
        previous_Serving_MME_Address,
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.serving_System_Identifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.serving_System_Identifier, $.BER)),
            /* IF_ABSENT  */ ((value.current_Serving_MME_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_DataNodeIdentifier, $.BER)(value.current_Serving_MME_Address, $.BER)),
            /* IF_ABSENT  */ ((value.previous_Serving_System_Identifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.previous_Serving_System_Identifier, $.BER)),
            /* IF_ABSENT  */ ((value.previous_Serving_MME_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_DataNodeIdentifier, $.BER)(value.previous_Serving_MME_Address, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Current_Previous_Systems(value, elGetter);
}


/* eslint-enable */
