/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary ClientPartToKeep
 * @description
 * 
 * Optional database list and additional search information saved with a
 * persistent query. The query itself is not in this part.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.2, EXT.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartToKeep ::= SEQUENCE{
 *     dbNames                 [2] IMPLICIT SEQUENCE OF InternationalString OPTIONAL,
 *     additionalSearchInfo    [3] OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ClientPartToKeep {
    /**
     * @summary `dbNames`.
     * @description
     * 
     * Optional list of databases to save with the query.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.2.
     * 
     * @public
     * @readonly
     */
    readonly dbNames: OPTIONAL<InternationalString[]>;
    /**
     * @summary `additionalSearchInfo`.
     * @description
     * 
     * Optional additional search information saved with the query. On Search,
     * the client uses this to indicate preferred format or content and the
     * server uses it for by-products of the search (for example intermediate
     * result counts). Version 3 only. The persistent-query definition does not
     * add rules beyond that.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.2, §3.2.2.1.12.
     * 
     * @public
     * @readonly
     */
    readonly additionalSearchInfo: OPTIONAL<OtherInformation>;

    constructor (
        dbNames: OPTIONAL<InternationalString[]>,
        additionalSearchInfo: OPTIONAL<OtherInformation>
    ) {
        this.dbNames = dbNames;
        this.additionalSearchInfo = additionalSearchInfo;
    }

    /**
     * @summary Restructures an object into a ClientPartToKeep
     * @description
     * 
     * This takes an `object` and converts it to a `ClientPartToKeep`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ClientPartToKeep`.
     * @returns {ClientPartToKeep}
     */
    public static _from_object (_o: { [_K in keyof (ClientPartToKeep)]: (ClientPartToKeep)[_K] }): ClientPartToKeep {
        return new ClientPartToKeep(_o.dbNames, _o.additionalSearchInfo);
    }


}

/**
 * @summary The Leading Root Component Types of ClientPartToKeep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ClientPartToKeep: $.ComponentSpec[] = [
    new $.ComponentSpec("dbNames", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("additionalSearchInfo", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ClientPartToKeep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ClientPartToKeep: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ClientPartToKeep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ClientPartToKeep: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ClientPartToKeep: $.ASN1Decoder<ClientPartToKeep> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientPartToKeep
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientPartToKeep (el: _Element): ClientPartToKeep {
    if (!_cached_decoder_for_ClientPartToKeep) { _cached_decoder_for_ClientPartToKeep = function (el: _Element): ClientPartToKeep {
    let dbNames: OPTIONAL<InternationalString[]>;
    let additionalSearchInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "dbNames": (_el: _Element): void => { dbNames = $._decode_implicit<InternationalString[]>(() => $._decodeSequenceOf<InternationalString>(() => _decode_InternationalString))(_el); },
        "additionalSearchInfo": (_el: _Element): void => { additionalSearchInfo = $._decode_explicit<OtherInformation>(() => _decode_OtherInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ClientPartToKeep,
        _extension_additions_list_spec_for_ClientPartToKeep,
        _root_component_type_list_2_spec_for_ClientPartToKeep,
        undefined,
    );
    return new ClientPartToKeep(
        dbNames,
        additionalSearchInfo
    );
}; }
    return _cached_decoder_for_ClientPartToKeep(el);
}

let _cached_encoder_for_ClientPartToKeep: $.ASN1Encoder<ClientPartToKeep> | null = null;

/**
 * @summary Encodes a(n) ClientPartToKeep into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientPartToKeep, encoded as an ASN.1 Element.
 */
export
function _encode_ClientPartToKeep (value: ClientPartToKeep, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientPartToKeep) { _cached_encoder_for_ClientPartToKeep = function (value: ClientPartToKeep, elGetter: $.ASN1Encoder<ClientPartToKeep>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    if (value.dbNames !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER)(value.dbNames, $.BER);
    }
    if (value.additionalSearchInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_OtherInformation, $.BER)(value.additionalSearchInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ClientPartToKeep(value, elGetter);
}


/* eslint-enable */
